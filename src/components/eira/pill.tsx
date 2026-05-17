import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EiraPillTone =
  | "neutral"
  | "forest"
  | "lime"
  | "sage"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outlineDark";

export interface EiraPillProps {
  tone?: EiraPillTone;
  children?: ReactNode;
  dot?: boolean;
  style?: CSSProperties;
  className?: string;
}

const TONES: Record<EiraPillTone, { bg: string; fg: string; ring?: string }> = {
  neutral: { bg: "rgba(23,52,37,0.06)", fg: "var(--eira-forest)" },
  forest: { bg: "var(--eira-forest)", fg: "var(--eira-surface)" },
  lime: { bg: "var(--eira-lime)", fg: "var(--eira-forest)" },
  sage: { bg: "rgba(118,149,135,0.22)", fg: "#345244" },
  success: { bg: "#e7f0ea", fg: "var(--status-success)" },
  warning: { bg: "#fbf1dc", fg: "#8a5e1d" },
  error: { bg: "#f6e0dd", fg: "#8c372e" },
  info: { bg: "#dbe5df", fg: "var(--eira-forest)" },
  outlineDark: {
    bg: "transparent",
    fg: "var(--eira-surface)",
    ring: "inset 0 0 0 1px rgba(249,248,227,0.3)",
  },
};

export function EiraPill({
  tone = "neutral",
  children,
  dot,
  style,
  className,
}: EiraPillProps) {
  const t = TONES[tone];
  return (
    <span
      className={cn("font-sans", className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 1,
        boxShadow: t.ring || "none",
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "currentColor",
          }}
        />
      )}
      {children}
    </span>
  );
}
