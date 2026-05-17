import type { CSSProperties } from "react";

export interface EiraAvatarProps {
  src?: string;
  initials?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
}

export function EiraAvatar({
  src,
  initials,
  size = 44,
  style,
  className,
}: EiraAvatarProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: src
          ? `var(--eira-surface-200) url('${src}') center/cover no-repeat`
          : "var(--eira-forest-100)",
        color: "var(--eira-forest)",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: size * 0.36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      {!src && initials}
    </div>
  );
}
