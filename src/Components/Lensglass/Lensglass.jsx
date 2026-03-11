"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                     LIQUID GLASS COMPONENT                                 ║
 * ║              Tuned to match Figma Glass effect values                      ║
 * ║                                                                            ║
 * ║  Works on ANY element: button, card, dropdown, modal, div, etc.            ║
 * ║  No background image needed — uses real DOM via backdrop-filter            ║
 * ║                                                                            ║
 * ║  ── FIGMA VALUES MAPPED ────────────────────────────────────────────────   ║
 * ║  Refraction  = 33   → LENS ratio         = 0.33                           ║
 * ║  Depth       = 100  → CORNER_FILL        = 0.48                           ║
 * ║  Dispersion  = 100  → edgeMask * 1.0, B channel boosted                  ║
 * ║  Frost       = 0    → blurPx prop        = 4  (near zero)                 ║
 * ║  Splay       = 100  → transition alpha   = 0.85                           ║
 * ║  Light       = -45°, 80% → LIGHTING_INTENSITY = 0.5, diagonal gradient   ║
 * ║                                                                            ║
 * ║  Search "← FIGMA:" to find and change each value                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * USAGE:
 *   <LensGlass>
 *     <button>Click me</button>
 *   </LensGlass>
 *
 *   <LensGlass borderRadius="2rem" blurPx={4}>
 *     <div>Card content</div>
 *   </LensGlass>
 *
 *   <LensGlass width={288} visible={isOpen}>
 *     <div>Dropdown content</div>
 *   </LensGlass>
 */

const VERT = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = `
  precision mediump float;
  uniform vec3  iResolution;
  uniform float uBase;

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 m2 = uv - 0.5;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CORNER SHAPE
    // Controls how round or square the glass shape is internally
    // 2.0 = circle | 6.0 = iOS rounded rect | 10.0 = sharp square
    // ← FIGMA: no direct slider — pair with CSS borderRadius prop
    const float POWER_EXPONENT = 6.0;
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    float asp = iResolution.x / iResolution.y;
    float roundedBox = pow(abs(m2.x * asp), POWER_EXPONENT)
                     + pow(abs(m2.y),       POWER_EXPONENT);

    float MM1 = uBase * 1.0;
    float MM2 = uBase * 0.95;
    float MM3 = uBase * 1.1;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // REFRACTION  ← FIGMA: Refraction = 33
    // How much the glass bends/distorts what is behind it
    // 0.1 = barely bends (flat glass look)
    // 0.33 = medium distortion  ← Figma value
    // 0.9  = extreme fish-eye / bubble lens
    float LENS = uBase * 0.33;
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const float MS1 = 8.0;
    const float MS2 = 16.0;
    const float MS3 = 2.0;
    const float MT1 = 0.95;
    const float MT2 = 0.9;
    const float MT3 = 1.5;
    const float GRADIENT_RANGE   = 0.2;
    const float GRADIENT_OFFSET  = 0.1;
    const float GRADIENT_EXTREME = -1000.0;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // LIGHT INTENSITY  ← FIGMA: Light = 80%
    // Brightness of the edge glow / rim light
    // 0.1 = very dim | 0.5 = medium ← Figma 80% | 1.0 = neon bright
    const float LIGHTING_INTENSITY = 0.5;
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    float rb1 = clamp((1.0 - roundedBox * MM1) * MS1, 0.0, 1.0);
    float rb2 = clamp((MT1 - roundedBox * MM2) * MS2, 0.0, 1.0)
              - clamp(pow(MT2 - roundedBox * MM2, 1.0) * MS2, 0.0, 1.0);
    float rb3 = clamp((MT3 - roundedBox * MM3) * MS3, 0.0, 1.0)
              - clamp(pow(1.0 - roundedBox * MM3, 1.0) * MS3, 0.0, 1.0);

    float transition = smoothstep(0.0, 1.0, rb1 + rb2);
    if (transition <= 0.0) { discard; return; }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // LIGHT ANGLE  ← FIGMA: Light angle = -45°
    // Controls which direction the light comes from on the glass
    // -m2.y alone          = light from top (0°)
    // -m2.y + m2.x * 0.5  = light from top-left (-45°) ← Figma value
    // m2.x alone           = light from left (90°)
    // Flip signs to reverse the direction
    float my = -m2.y + m2.x * 0.5;
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    float gradient = clamp((clamp(my, 0.0, GRADIENT_RANGE) + GRADIENT_OFFSET) / 2.0, 0.0, 1.0)
                   + clamp((clamp(-my, GRADIENT_EXTREME, GRADIENT_RANGE) * rb3 + GRADIENT_OFFSET) / 2.0, 0.0, 1.0);

    vec4 edgeGlow = vec4(rb1) * gradient + vec4(rb2) * LIGHTING_INTENSITY;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // DISPERSION  ← FIGMA: Dispersion = 100
    // Rainbow / prism color split on glass edges
    // 0.0 = no color (pure white edge)
    // 0.5 = subtle color hints
    // 1.0 = full prism rainbow ← Figma value
    float edgeMask = rb2 * 1.0;
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // DISPERSION COLOR MIX
    // Which colors appear in the prism split (R / G / B channels)
    // Raise a channel value (0.0–1.0) to make that color stronger
    // Current: blue-dominant for cool glass look
    vec4 dispersion = vec4(
      edgeMask * 0.4,  // R — warm/red tones on edge
      edgeMask * 0.5,  // G — green tones on edge
      edgeMask * 0.9,  // B — cool/blue tones ← boosted for Dispersion=100
      0.0
    );
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // SPLAY  ← FIGMA: Splay = 100
    // How wide the glow spreads from the glass edge outward
    // 0.3 = tight narrow glow
    // 0.55 = normal spread
    // 0.85 = wide spread ← Figma value
    gl_FragColor = vec4(
      clamp(edgeGlow + dispersion, 0.0, 1.0).rgb,
      transition * 0.85
    );
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  }
`;

function useWebGL(canvasRef, enabled) {
  const stateRef = useRef(null);
  const rafRef   = useRef(null);

  const boot = useCallback((canvas) => {
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const mkShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error("LensGlass shader error:", gl.getShaderInfoLog(s));
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    stateRef.current = {
      gl,
      uRes:  gl.getUniformLocation(prog, "iResolution"),
      uBase: gl.getUniformLocation(prog, "uBase"),
    };

    const render = () => {
      const s = stateRef.current;
      if (!s) return;

      const r   = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = r.width  * dpr;
      canvas.height = r.height * dpr;

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // DEPTH / CORNER FILL  ← FIGMA: Depth = 100
      // How much of the element the glass WebGL effect covers
      // 0.35 = very round corners, lots of transparent area at edges
      // 0.44 = normal balanced
      // 0.48 = nearly fills whole element ← Figma Depth=100
      const CORNER_FILL = 0.48;
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      const a      = r.width / r.height;
      const edgeRB = Math.pow(CORNER_FILL * a, 6) + Math.pow(CORNER_FILL, 6);
      const base   = 1.0 / edgeRB;

      const { gl: g } = s;
      g.viewport(0, 0, canvas.width, canvas.height);
      g.clearColor(0, 0, 0, 0);
      g.clear(g.COLOR_BUFFER_BIT);
      g.uniform3f(s.uRes,  canvas.width, canvas.height, 1.0);
      g.uniform1f(s.uBase, base);
      g.drawArrays(g.TRIANGLE_STRIP, 0, 4);

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    if (!enabled) {
      cancelAnimationFrame(rafRef.current);
      stateRef.current = null;
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const t = setTimeout(() => boot(canvas), 10);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafRef.current);
      stateRef.current = null;
    };
  }, [enabled, boot, canvasRef]);
}

export default function LensGlass({
  children,
  border,   // CSS border string e.g. "1px solid rgba(255,255,255,0.18)" — default is subtle white outline
  width,    // number (px) or string e.g. "100%" — omit for full width
  height,   // number (px) or string — omit for auto height
  visible = true,

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FROST  ← FIGMA: Frost = 0
  // Backdrop blur in pixels — how frosted/blurry the glass looks
  // 0  = crystal clear, sharp glass  ← Figma value (Frost=0)
  // 8  = light frost
  // 18 = medium frosted glass
  // 32 = heavy frost, nearly opaque
  blurPx = 4,
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // WEBGL LAYER OPACITY
  // How strong the WebGL edge glow effect appears
  // 0.0 = no WebGL (just backdrop-filter)
  // 0.55 = balanced
  // 1.0 = maximum glow intensity
  canvasOpacity = 0.55,
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BORDER RADIUS
  // CSS border radius of the glass container
  // "0.5rem" = slightly rounded | "1.125rem" = default | "50%" = circle
  borderRadius = "1.125rem",
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TINT
  // Subtle color overlay on the glass surface itself
  // "rgba(255,255,255,0.06)" = slight white tint — clean glass look
  // "rgba(119,189,116,0.08)" = brand green tint
  // "rgba(0,120,255,0.06)"   = blue tint
  // "rgba(0,0,0,0.1)"        = dark smoked glass
  tint = "rgba(255,255,255,0.06)",
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  style = {},
  className = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  const _canvasRef = useRef(null);
  useWebGL(_canvasRef, visible);

  const sizeStyle = {
    ...(width  !== undefined && { width:  typeof width  === "number" ? `${width}px`  : width  }),
    ...(height !== undefined && { height: typeof height === "number" ? `${height}px` : height }),
  };

  return (
    <div
      className={className}
      style={{
        position:        "relative",
        overflow:        "hidden",
        borderRadius,
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // BORDER — glass edge outline
        // Increase 0.18 for more visible rim, decrease for invisible edge
        // Change color e.g. "1px solid rgba(119,189,116,0.3)" for green rim
border: border || "1px solid rgba(255,255,255,0.18)",
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        opacity:         visible ? 1 : 0,
        transform:       visible ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.95)",
        pointerEvents:   visible ? "auto" : "none",
        transition:      "opacity 0.22s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        transformOrigin: "top center",
        ...sizeStyle,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Layer 1 — backdrop-filter: reflects real DOM elements behind the glass */}
      {/* saturate(180%) = vivid colors through glass | brightness(1.08) = slightly brighter */}
      <div
        aria-hidden
        style={{
          position:             "absolute",
          inset:                0,
          borderRadius:         "inherit",
          backdropFilter:       `blur(${blurPx}px) saturate(180%) brightness(1.08)`,
          WebkitBackdropFilter: `blur(${blurPx}px) saturate(180%) brightness(1.08)`,
          background:           tint,
          zIndex:               1,
          pointerEvents:        "none",
        }}
      />

      {/* Layer 2 — WebGL canvas: edge glow + dispersion + light gradient */}
      {/* mixBlendMode "screen" = additive bright glow. Change to "normal" for opaque overlay */}
      <canvas
        ref={_canvasRef}
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          display:       "block",
          pointerEvents: "none",
          mixBlendMode:  "screen",
          opacity:       canvasOpacity,
          zIndex:        2,
        }}
      />

      {/* Layer 3 — top specular shine: simulates glass surface highlight */}
      {/* Adjust left/right % for width, rgba alpha for brightness */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          top:           0,
          left:          "6%",
          right:         "6%",
          height:        "1px",
          background:    "linear-gradient(90deg, transparent, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.7) 70%, transparent)",
          zIndex:        3,
          pointerEvents: "none",
        }}
      />

      {/* Layer 4 — bottom inner shadow: adds glass thickness / depth feel */}
      {/* Increase rgba alpha (0.3) for deeper shadow */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          bottom:        0,
          left:          "10%",
          right:         "10%",
          height:        "1px",
          background:    "rgba(0,0,0,0.3)",
          zIndex:        3,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 4 }}>
        {children}
      </div>
    </div>
  );
}