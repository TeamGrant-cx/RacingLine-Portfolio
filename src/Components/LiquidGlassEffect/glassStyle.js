/**
 * Shared liquid-glass style helpers.
 *
 * Why inline and not only CSS?
 *   Tailwind v4's Lightning CSS minifier strips `backdrop-filter: url(#frosted)`
 *   from stylesheets in production builds. Applying it via inline style survives
 *   the minifier and actually reaches the browser on Vercel.
 *
 * Usage:
 *   import { glassBackdrop } from "@/Components/LiquidGlassEffect/glassStyle";
 *
 *   <button className="glass" style={{ ...glassBackdrop, borderRadius: 14 }}>
 *     Click me
 *   </button>
 */

export const GLASS_FILTER = "brightness(1.05) blur(8px) saturate(1.4) url(#frosted)";

export const glassBackdrop = {
  backdropFilter: GLASS_FILTER,
  WebkitBackdropFilter: GLASS_FILTER,
};
