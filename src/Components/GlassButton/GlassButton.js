import React from "react";
import { glassBackdrop } from "@/Components/LiquidGlassEffect/glassStyle";

export default function GlassButton({
  as: Tag = "button",
  text,
  children,
  className = "",
  transition = true,
  type = "button",
  onClick,
  ...rest
}) {
  const isButton = Tag === "button";

  const buttonDefaults = isButton
    ? `rounded-[3.125rem] py-[1rem] px-[3.125rem] text-[1.5rem] text-white${
        transition ? " transition-colors duration-500" : ""
      }`
    : "";

  const finalClass = `glass glow-border ${buttonDefaults} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  const elementProps = {
    className: finalClass,
    style: glassBackdrop,
    onClick,
    ...rest,
  };

  if (isButton) elementProps.type = type;

  return <Tag {...elementProps}>{text ?? children}</Tag>;
}
