import type { ReactNode } from "react";

export interface EiraFieldProps {
  label?: string;
  hint?: string;
  error?: string;
  children?: ReactNode;
}

export function EiraField({ label, hint, error, children }: EiraFieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 500,
            color: "var(--eira-forest)",
          }}
        >
          {label}
        </label>
      )}
      {children}
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            color: error ? "var(--status-error)" : "var(--eira-stone-500)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
