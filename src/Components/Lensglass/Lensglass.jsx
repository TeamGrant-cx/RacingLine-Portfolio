"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                 LIQUID GLASS — EXACT CodePen SHADER                        ║
 * ║                                                                            ║
 * ║  Uses the EXACT same formulas and ratios from the CodePen demo.            ║
 * ║  The only difference: glass is fixed at element center (no mouse),         ║
 * ║  and multipliers are auto-scaled so the glass fills the element.           ║
 * ║                                                                            ║
 * ║  Search for "TUNEABLE" to find values you can change.                      ║
 * ║                                                                            ║
 * ║  TUNEABLE VALUES:                                                          ║
 * ║  ─────────────────────────────────────────────────────────────────         ║
 * ║  1. POWER_EXPONENT (line ~85)     Current: 6.0                            ║
 * ║     Glass corner shape. 2.0 = circle, 6.0 = iOS rect, 10.0 = square      ║
 * ║                                                                            ║
 * ║  2. LENS ratio (line ~97)         Current: 0.5                            ║
 * ║     Refraction strength. 0.2 = subtle, 0.5 = normal, 1.0 = extreme       ║
 * ║                                                                            ║
 * ║  3. SAMPLE_OFFSET (line ~102)     Current: 0.5                            ║
 * ║     Blur softness. 0.2 = sharp, 0.5 = normal, 2.0 = very blurry         ║
 * ║                                                                            ║
 * ║  4. LIGHTING_INTENSITY (line ~114) Current: 0.3                           ║
 * ║     Edge glow. 0.1 = subtle, 0.3 = normal, 0.6 = bright                 ║
 * ║                                                                            ║
 * ║  5. Corner fill (line ~230)       Current: 0.44                           ║
 * ║     How much glass fills element. 0.35 = round, 0.44 = normal, 0.49 = sharp║
 * ║                                                                            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */
export default function LensGlass({
  visible = true,
  width = 288,
  style = {},
  className = "",
  children,
  onMouseEnter,
  onMouseLeave,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef(null);

  /* ─────────────── Vertex Shader ─────────────── */
  const VERT = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;

  /* ─────────────── Fragment Shader ───────────────
     EXACT CodePen formulas. Same constants, same ratios.
     Only change: mouse → fixed center, multipliers → uniform scaled to fill element.
  */
  const FRAG = `
    precision mediump float;

    uniform vec3      iResolution;  // canvas size in pixels
    uniform sampler2D iChannel0;    // background image texture
    uniform vec2      uTexOffset;   // where this element sits on the bg image (UV 0-1)
    uniform vec2      uTexScale;    // how much of the bg image this element covers
    uniform float     uBase;        // base multiplier (auto-computed to fill element)

    // Maps element-local UV (0-1) to the correct background texture UV
    vec2 toBg(vec2 v) {
      return uTexOffset + v * uTexScale;
    }

    void main() {
      // ── EXACT CodePen constants (same values, same ratios) ──

      // TUNEABLE: Glass corner shape — change this number
      // 2.0 = circle, 6.0 = iOS rounded rect (CodePen default), 10.0 = almost square
      const float POWER_EXPONENT = 10.0; // ← change this

      // Multiplier RATIOS from CodePen (10000, 9500, 11000, 5000)
      // uBase is auto-computed so glass fills the element. Ratios are preserved exactly.
      float MASK_MULTIPLIER_1 = uBase * 1.0;   // CodePen: 10000 (ratio: 1.0)
      float MASK_MULTIPLIER_2 = uBase * 0.95;  // CodePen: 9500  (ratio: 0.95)
      float MASK_MULTIPLIER_3 = uBase * 1.1;   // CodePen: 11000 (ratio: 1.1)

      // TUNEABLE: Refraction strength — change the 0.5 ratio
      // 0.2 = subtle bend, 0.5 = CodePen default, 1.0 = extreme fish-eye
      float LENS_MULTIPLIER = uBase * 0.9; // ← change this 0.5

      // Same mask strengths as CodePen (NOT changed)
      const float MASK_STRENGTH_1 = 8.0;
      const float MASK_STRENGTH_2 = 16.0;
      const float MASK_STRENGTH_3 = 2.0;
      const float MASK_THRESHOLD_1 = 0.95;
      const float MASK_THRESHOLD_2 = 0.9;
      const float MASK_THRESHOLD_3 = 1.5;
      const float SAMPLE_RANGE = 4.0;

      // TUNEABLE: Blur softness — change this number
      // 0.2 = sharp clear glass, 0.5 = CodePen default, 2.0 = very blurry frosted
      const float SAMPLE_OFFSET = 0.5; // ← change this

      const float GRADIENT_RANGE = 0.2;
      const float GRADIENT_OFFSET = 0.1;
      const float GRADIENT_EXTREME = -1000.0;

      // TUNEABLE: Edge glow brightness — change this number
      // 0.1 = subtle, 0.3 = CodePen default, 0.6 = very bright neon edge
      const float LIGHTING_INTENSITY = 10.3; // ← change this

      // ── EXACT CodePen math (no changes to formulas) ──

      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      uv.y = 1.0 - uv.y; // flip to CSS coords (0,0 = top-left)

      // Glass center = element center (CodePen uses mouse, we use fixed center)
      vec2 m2 = uv - 0.5;

      // Superellipse rounded rectangle — EXACT CodePen formula
      float aspect = iResolution.x / iResolution.y;
      float roundedBox = pow(abs(m2.x * aspect), POWER_EXPONENT)
                       + pow(abs(m2.y), POWER_EXPONENT);

      // Masks — EXACT CodePen formulas
      float rb1 = clamp((1.0 - roundedBox * MASK_MULTIPLIER_1) * MASK_STRENGTH_1, 0.0, 1.0);

      float rb2 = clamp((MASK_THRESHOLD_1 - roundedBox * MASK_MULTIPLIER_2) * MASK_STRENGTH_2, 0.0, 1.0)
                - clamp(pow(MASK_THRESHOLD_2 - roundedBox * MASK_MULTIPLIER_2, 1.0) * MASK_STRENGTH_2, 0.0, 1.0);

      float rb3 = clamp((MASK_THRESHOLD_3 - roundedBox * MASK_MULTIPLIER_3) * MASK_STRENGTH_3, 0.0, 1.0)
                - clamp(pow(1.0 - roundedBox * MASK_MULTIPLIER_3, 1.0) * MASK_STRENGTH_3, 0.0, 1.0);

      vec4 fragColor = vec4(0.0);
      float transition = smoothstep(0.0, 1.0, rb1 + rb2);

      // Outside glass → transparent (CodePen shows background, we discard for overlay)
      if (transition <= 0.0) { discard; return; }

      // Lens refraction — EXACT CodePen formula
      vec2 lens = ((uv - 0.5) * 1.0 * (1.0 - roundedBox * LENS_MULTIPLIER) + 0.5);

      // 81-tap blur — EXACT CodePen formula
      float total = 0.0;
      for (float x = -SAMPLE_RANGE; x <= SAMPLE_RANGE; x++) {
        for (float y = -SAMPLE_RANGE; y <= SAMPLE_RANGE; y++) {
          vec2 offset = vec2(x, y) * SAMPLE_OFFSET / iResolution.xy;
          fragColor += texture2D(iChannel0, toBg(lens + offset));
          total += 1.0;
        }
      }
      fragColor /= total;

      // Gradient lighting — EXACT CodePen formula
      // (m2.y negated because we flipped Y for CSS coords)
      float my = -m2.y;
      float gradient = clamp((clamp(my, 0.0, GRADIENT_RANGE) + GRADIENT_OFFSET) / 2.0, 0.0, 1.0)
                     + clamp((clamp(-my, GRADIENT_EXTREME, GRADIENT_RANGE) * rb3 + GRADIENT_OFFSET) / 2.0, 0.0, 1.0);

      vec4 lighting = clamp(fragColor + vec4(rb1) * gradient + vec4(rb2) * LIGHTING_INTENSITY, 0.0, 1.0);

      // Final mix — CodePen mixes with raw bg. We use alpha for overlay transparency.
      vec4 bg = texture2D(iChannel0, toBg(uv));
      vec4 result = mix(bg, lighting, transition);
      gl_FragColor = vec4(result.rgb, transition);
    }
  `;

  /* ─────────────── WebGL Setup ─────────────── */
  const boot = useCallback(
    (canvas, img) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (canvas.offsetWidth || width) * dpr;
      canvas.height = (canvas.offsetHeight || 320) * dpr;

      const gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
      });
      if (!gl) return;

      const mk = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
          console.error("Shader error:", gl.getShaderInfoLog(s));
        }
        return s;
      };

      const prog = gl.createProgram();
      gl.attachShader(prog, mk(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW
      );
      const pos = gl.getAttribLocation(prog, "position");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      const u = {
        res: gl.getUniformLocation(prog, "iResolution"),
        tex: gl.getUniformLocation(prog, "iChannel0"),
        off: gl.getUniformLocation(prog, "uTexOffset"),
        sc: gl.getUniformLocation(prog, "uTexScale"),
        base: gl.getUniformLocation(prog, "uBase"),
      };

      stateRef.current = {
        gl, u, tex,
        imgW: img.naturalWidth,
        imgH: img.naturalHeight,
      };

      /* ── Render loop ── */
      const render = () => {
        const s = stateRef.current;
        if (!s) return;

        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // ── background-size: cover UV math ──
        const vpW = window.innerWidth;
        const vpH = window.innerHeight;
        const imgAsp = s.imgW / s.imgH;
        const vpAsp = vpW / vpH;

        let drawW, drawH, offX, offY;
        if (vpAsp > imgAsp) {
          drawW = vpW; drawH = vpW / imgAsp; offX = 0; offY = (vpH - drawH) / 2;
        } else {
          drawH = vpH; drawW = vpH * imgAsp; offX = (vpW - drawW) / 2; offY = 0;
        }

        const texOX = (rect.left - offX) / drawW;
        const texOY = (rect.top - offY) / drawH;
        const texSX = rect.width / drawW;
        const texSY = rect.height / drawH;

        // ── Base multiplier ──
        // TUNEABLE: Corner fill — change the 0.44 below (BOTH of them, same number)
        // 0.35 = very round corners, 0.44 = normal, 0.49 = barely rounded / sharp
        const asp = rect.width / rect.height;
        const edgeRB = Math.pow(0.44 /* ← change this */ * asp, 6)
                     + Math.pow(0.44 /* ← and this (same number) */, 6);
        const baseMultiplier = 1.0 / edgeRB;

        const { gl: g } = s;
        g.viewport(0, 0, canvas.width, canvas.height);
        g.clearColor(0, 0, 0, 0);
        g.clear(g.COLOR_BUFFER_BIT);

        g.uniform3f(s.u.res, canvas.width, canvas.height, 1.0);
        g.uniform2f(s.u.off, texOX, texOY);
        g.uniform2f(s.u.sc, texSX, texSY);
        g.uniform1f(s.u.base, baseMultiplier);

        g.activeTexture(g.TEXTURE0);
        g.bindTexture(g.TEXTURE_2D, s.tex);
        g.uniform1i(s.u.tex, 0);

        g.drawArrays(g.TRIANGLE_STRIP, 0, 4);

        rafRef.current = requestAnimationFrame(render);
      };

      rafRef.current = requestAnimationFrame(render);
    },
    [width]
  );

  /* ─────────────── Start/Stop ─────────────── */
  useEffect(() => {
    if (!visible) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stateRef.current = null;
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Auto-detect body background image — no prop needed
    const raw = getComputedStyle(document.body).backgroundImage;
    const match = raw.match(/url\(["']?(.+?)["']?\)/);
    const bgUrl = match ? match[1] : null;

    if (!bgUrl) {
      console.warn("LensGlass: no background-image found on <body>");
      return;
    }

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = bgUrl;

    if (img.complete && img.naturalWidth) boot(canvas, img);
    else img.onload = () => boot(canvas, img);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stateRef.current = null;
    };
  }, [visible, boot]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scaleY(1)"
          : "translateY(-8px) scaleY(0.95)",
        pointerEvents: visible ? "auto" : "none",
        transition:
          "opacity 0.22s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        transformOrigin: "top center",
        borderRadius: "1.125rem",
        border: "1px solid rgba(255,255,255,0.13)",
        // boxShadow:
        //   "0 0 0 0.5px rgba(119,189,116,0.20), 0 24px 60px rgba(1,0,0)",
        width,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Layer 1: backdrop-filter — shows REAL page content (DOM elements) through the glass */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          backdropFilter: "blur(16px) saturate(180%) brightness(1.05)",
          WebkitBackdropFilter: "blur(16px) saturate(180%) brightness(1.05)",
          background: "rgba(255, 255, 255, 0.06)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: WebGL canvas — adds refraction lighting, edge glow, gradient on top */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.45,
          zIndex: 2,
        }}
      />

      {/* Top specular shine line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0, left: "6%", right: "6%",
          height: "1px",
          background: "white",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 4 }}>{children}</div>
    </div>
  );
}
