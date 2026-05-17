import type { CSSProperties, ReactNode } from "react";

export interface EiraPhoneProps {
  children?: ReactNode;
  label?: string;
  style?: CSSProperties;
  className?: string;
}

export function EiraPhone({ children, label, style, className }: EiraPhoneProps) {
  return (
    <div
      className={className}
      style={{
        width: 390,
        height: 780,
        borderRadius: 44,
        overflow: "hidden",
        position: "relative",
        background: "var(--eira-surface)",
        boxShadow:
          "0 30px 80px rgba(23,52,37,0.18), 0 0 0 1px rgba(23,52,37,0.1)",
        fontFamily: "var(--font-sans)",
        color: "var(--eira-ink)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 44,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 26px 0",
          fontSize: 14,
          fontWeight: 600,
          color: "var(--eira-forest)",
          pointerEvents: "none",
        }}
      >
        <span>9:41</span>
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 30,
            borderRadius: 20,
            background: "#000",
          }}
        />
        <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
          <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true">
            <rect x="0" y="6" width="3" height="4" rx="0.5" fill="currentColor" />
            <rect x="4" y="4" width="3" height="6" rx="0.5" fill="currentColor" />
            <rect x="8" y="2" width="3" height="8" rx="0.5" fill="currentColor" />
            <rect x="12" y="0" width="3" height="10" rx="0.5" fill="currentColor" />
          </svg>
          <svg width="22" height="11" viewBox="0 0 22 11" aria-hidden="true">
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="10"
              rx="2.5"
              stroke="currentColor"
              fill="none"
            />
            <rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor" />
          </svg>
        </span>
      </div>
      <div
        style={{
          flex: 1,
          paddingTop: 44,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 130,
            height: 5,
            borderRadius: 999,
            background: "rgba(23,52,37,0.3)",
          }}
        />
      </div>
      {label && (
        <div
          style={{
            position: "absolute",
            bottom: -28,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            color: "var(--eira-stone-500)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
