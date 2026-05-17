import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface EiraCardProps {
  children?: ReactNode;
  padding?: number;
  dark?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

export function EiraCard({
  children,
  padding = 18,
  dark = false,
  style,
  className,
  onClick,
}: EiraCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(className)}
      style={{
        background: dark ? "var(--eira-forest)" : "#fff",
        color: dark ? "var(--eira-surface)" : "var(--eira-ink)",
        borderRadius: 14,
        padding,
        boxShadow: dark
          ? "none"
          : "0 2px 6px rgba(23,52,37,0.06), 0 1px 2px rgba(23,52,37,0.04)",
        cursor: onClick ? "pointer" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
