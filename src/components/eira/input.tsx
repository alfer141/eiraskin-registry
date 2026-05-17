"use client";

import type { CSSProperties } from "react";

export interface EiraInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  style?: CSSProperties;
  autoFocus?: boolean;
  className?: string;
}

export function EiraInput({
  value,
  onChange,
  placeholder,
  type = "text",
  style,
  autoFocus,
  className,
}: EiraInputProps) {
  return (
    <input
      type={type}
      value={value || ""}
      placeholder={placeholder}
      // biome-ignore lint/a11y/noAutofocus: opt-in prop
      autoFocus={autoFocus}
      onChange={(e) => onChange?.(e.target.value)}
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--eira-ink)",
        background: "#fff",
        border: "1px solid rgba(23,52,37,0.18)",
        borderRadius: 10,
        padding: "12px 14px",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}
