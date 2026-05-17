import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface OverlayCardProps {
  /**
   * `forest` — default glass: forest-tinted, cream text. Use over photography
   * with light areas. `cream` — light glass for use over dark areas of a photo.
   */
  tone?: "forest" | "cream";
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Backdrop-blurred overlay card used on top of EIRA hero photography.
 * Implements the forest-glass / cream-glass formula from the design system.
 */
export function OverlayCard({
  tone = "forest",
  children,
  className,
  style,
}: OverlayCardProps) {
  const isForest = tone === "forest";

  return (
    <div
      className={cn("border", className)}
      style={{
        background: isForest
          ? "rgba(23, 52, 37, 0.42)"
          : "rgba(247, 246, 244, 0.62)",
        backdropFilter: "blur(22px) saturate(1.15)",
        WebkitBackdropFilter: "blur(22px) saturate(1.15)",
        borderColor: isForest
          ? "rgba(247, 246, 244, 0.10)"
          : "rgba(23, 52, 37, 0.06)",
        borderRadius: "var(--radius-md, 14px)",
        color: isForest ? "var(--eira-surface)" : "var(--eira-forest)",
        padding: "18px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export interface OverlayBenefit {
  /** Big numeric value, e.g. "160+", "2x", "$890". */
  value: ReactNode;
  /** Title under the number. */
  title: string;
  /** Optional sub-label below title. */
  sub?: string;
}

export interface OverlayBenefitsProps {
  tone?: "forest" | "cream";
  benefits: OverlayBenefit[];
  className?: string;
  style?: CSSProperties;
}

/**
 * 3-column hairline-divided benefits row inside a glass overlay card.
 * Used at the bottom of hero photography panes.
 */
export function OverlayBenefits({
  tone = "forest",
  benefits,
  className,
  style,
}: OverlayBenefitsProps) {
  const isForest = tone === "forest";
  const dividerBg = isForest
    ? "rgba(247,246,244,0.16)"
    : "rgba(23,52,37,0.12)";
  const subColor = isForest
    ? "rgba(247,246,244,0.7)"
    : "rgba(23,52,37,0.65)";
  const titleColor = isForest
    ? "var(--eira-surface)"
    : "var(--eira-forest)";

  const gridTemplate = benefits
    .map((_, i) => (i === 0 ? "1fr" : "1px 1fr"))
    .join(" ");

  return (
    <OverlayCard tone={tone} className={className} style={style}>
      <div
        className="grid items-stretch gap-4"
        style={{ gridTemplateColumns: gridTemplate }}
      >
        {benefits.map((b, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div
                aria-hidden="true"
                style={{ background: dividerBg, width: 1, alignSelf: "stretch" }}
              />
            )}
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: 28,
                  lineHeight: 1,
                  color: "var(--eira-lime)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {b.value}
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  marginTop: 6,
                  color: titleColor,
                }}
              >
                {b.title}
              </div>
              {b.sub && (
                <div
                  className="font-sans"
                  style={{
                    fontSize: 11,
                    color: subColor,
                    marginTop: 2,
                    lineHeight: 1.4,
                  }}
                >
                  {b.sub}
                </div>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </OverlayCard>
  );
}

export default OverlayCard;
