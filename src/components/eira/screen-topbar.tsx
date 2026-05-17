import type { ReactNode } from "react";
import { Icons } from "./icons";

export interface EiraScreenTopbarProps {
  title?: string;
  onBack?: () => void;
  action?: ReactNode;
}

export function EiraScreenTopbar({
  title,
  onBack,
  action,
}: EiraScreenTopbarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px 12px",
        minHeight: 44,
      }}
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            color: "var(--eira-forest)",
            padding: 6,
          }}
        >
          {Icons.arrowLeft()}
        </button>
      ) : (
        <div style={{ width: 28 }} />
      )}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 600,
          color: "var(--eira-forest)",
          letterSpacing: "-0.005em",
        }}
      >
        {title}
      </span>
      <div style={{ width: 28, display: "flex", justifyContent: "flex-end" }}>
        {action}
      </div>
    </div>
  );
}
