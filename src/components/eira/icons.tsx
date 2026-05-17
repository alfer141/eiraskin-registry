import type { CSSProperties, ReactNode } from "react";

export interface IconProps {
  size?: number;
  stroke?: number;
  fill?: string;
  children?: ReactNode;
  d?: string;
  style?: CSSProperties;
  className?: string;
}

export function Icon({
  d,
  size = 20,
  stroke = 1.5,
  fill = "none",
  children,
  style,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block", ...style }}
      className={className}
      aria-hidden="true"
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
}

export interface SparkleProps {
  size?: number;
  color?: string;
  className?: string;
}

export function Sparkle({
  size = 16,
  color = "currentColor",
  className,
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: "block" }}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
    </svg>
  );
}

export const Icons = {
  arrowRight: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  ),
  arrowLeft: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </Icon>
  ),
  close: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Icon>
  ),
  check: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  ),
  clock: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),
  calendar: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </Icon>
  ),
  camera: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <circle cx="12" cy="13" r="4" />
      <path d="M9 6l1.5-3h3L15 6" />
    </Icon>
  ),
  message: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.3L21 21l-5.4-1.4a8.5 8.5 0 1 1 5.4-8.1Z" />
    </Icon>
  ),
  user: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </Icon>
  ),
  home: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M3 12l9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </Icon>
  ),
  bottle: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M9 3h6v3l1 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l1-2V3z" />
      <path d="M9 12h6" />
    </Icon>
  ),
  shield: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
    </Icon>
  ),
  upload: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M12 4v12" />
      <path d="M7 9l5-5 5 5" />
      <path d="M5 20h14" />
    </Icon>
  ),
  chevron: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M9 6l6 6-6 6" />
    </Icon>
  ),
  phone: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Icon>
  ),
  video: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M22 8l-6 4 6 4z" />
    </Icon>
  ),
  pin: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  ),
  bell: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </Icon>
  ),
  star: (props?: Partial<IconProps>) => (
    <Icon fill="currentColor" {...props}>
      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
    </Icon>
  ),
  plus: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Icon>
  ),
  send: (props?: Partial<IconProps>) => (
    <Icon {...props}>
      <path d="M22 2 11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </Icon>
  ),
};
