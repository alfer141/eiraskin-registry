"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EiraButtonVariant = "primary" | "lime" | "ghost" | "text" | "onDark";
export type EiraButtonSize = "sm" | "md" | "lg";

export interface EiraButtonProps {
  variant?: EiraButtonVariant;
  size?: EiraButtonSize;
  children?: ReactNode;
  icon?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  full?: boolean;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const SIZES: Record<
  EiraButtonSize,
  { padding: string; fontSize: number; radius: number }
> = {
  sm: { padding: "8px 14px", fontSize: 13, radius: 10 },
  md: { padding: "13px 20px", fontSize: 14, radius: 14 },
  lg: { padding: "16px 24px", fontSize: 15, radius: 16 },
};

const VARIANTS: Record<
  EiraButtonVariant,
  { bg: string; fg: string; hover: string; ring?: string }
> = {
  primary: { bg: "var(--eira-forest)", fg: "var(--eira-surface)", hover: "#0e2418" },
  lime: { bg: "var(--eira-lime)", fg: "var(--eira-forest)", hover: "#d6ec84" },
  ghost: {
    bg: "transparent",
    fg: "var(--eira-forest)",
    ring: "inset 0 0 0 1px rgba(23,52,37,0.32)",
    hover: "rgba(23,52,37,0.04)",
  },
  text: { bg: "transparent", fg: "var(--eira-forest)", hover: "transparent" },
  onDark: { bg: "var(--eira-surface)", fg: "var(--eira-forest)", hover: "#fff" },
};

export function EiraButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconRight,
  onClick,
  full,
  className,
  style,
  type = "button",
  disabled,
}: EiraButtonProps) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const [hov, setHov] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={cn("font-sans", className)}
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: s.fontSize,
        padding: s.padding,
        borderRadius: s.radius,
        background: hov && !disabled ? v.hover : v.bg,
        color: v.fg,
        border: 0,
        boxShadow: v.ring || "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background 140ms cubic-bezier(.22,.61,.36,1)",
        width: full ? "100%" : undefined,
        lineHeight: 1,
        letterSpacing: "0.005em",
        ...style,
      }}
    >
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
