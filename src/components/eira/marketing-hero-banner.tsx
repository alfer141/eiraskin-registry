import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MarketingNav, type MarketingNavItem } from "./marketing-nav";
import type { OverlayBenefit } from "./overlay-card";

export interface MarketingHeroBannerProps {
  /** Top accent promo strip text. */
  promoBefore?: string;
  promoAccent?: string;
  promoAfter?: string;
  promoCtaLabel?: string;
  promoCtaHref?: string;
  /** Pill eyebrow shown above the headline inside the glass container. */
  pillEyebrow?: string;
  headline?: string;
  /** Italic lime accent fragment inline in the headline. */
  accentWord?: string;
  headlineSuffix?: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Background hero image (horizontal). Falls back to forest panel. */
  imageSrc?: string;
  benefits?: OverlayBenefit[];
  navItems?: MarketingNavItem[];
  /** Floating circular chat affordance at bottom-right. */
  cornerChat?: ReactNode | false;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_BENEFITS: OverlayBenefit[] = [
  {
    value: "160+",
    title: "pruebas dermatológicas",
    sub: "Detecta 50+ condiciones",
  },
  { value: "2x", title: "al año", sub: "Seguimiento de por vida" },
  { value: "No", title: "consultorio", sub: "Costo transparente" },
];

const DEFAULT_NAV: MarketingNavItem[] = [
  { label: "Cómo funciona", href: "#how" },
  { label: "Obagi Nu-Derm", href: "#obagi" },
  { label: "Dermatólogos", href: "#derma" },
  { label: "FAQ", href: "#faq" },
  { label: "Nosotros", href: "#about" },
];

/**
 * Banner-style hero — promo strip on top, forest backdrop with optional photo,
 * glass container with copy on the left, hairline-divided benefits on the
 * bottom right, and a floating chat affordance.
 */
export function MarketingHeroBanner({
  promoBefore = "$1,490",
  promoAccent = "→",
  promoAfter = "$890 MXN · valoración inicial",
  promoCtaLabel = "Reserva esta semana",
  promoCtaHref = "#book",
  pillEyebrow = "Aceptamos seguro · ISA · Plan MD",
  headline = "Tu chequeo dermatológico,",
  accentWord = "en casa.",
  headlineSuffix = "",
  lead = "Cada año. 1 valoración + protocolo Obagi Nu-Derm + seguimiento humano cada 2 semanas. Desde $890 MXN — menos de $30 al día.",
  ctaLabel = "Empezar valoración →",
  ctaHref = "#start",
  imageSrc,
  benefits = DEFAULT_BENEFITS,
  navItems = DEFAULT_NAV,
  cornerChat,
  className,
  style,
}: MarketingHeroBannerProps) {
  const bgStyle: CSSProperties = imageSrc
    ? {
        backgroundImage: `linear-gradient(120deg, rgba(23,52,37,0.55) 0%, rgba(23,52,37,0.2) 60%), url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background:
          "radial-gradient(circle at 70% 35%, rgba(118,149,135,0.22) 0%, rgba(118,149,135,0) 50%), radial-gradient(circle at 90% 80%, rgba(118,149,135,0.18) 0%, rgba(118,149,135,0) 45%), var(--eira-forest)",
      };

  const dividerColor = "rgba(247,246,244,0.16)";

  return (
    <section
      className={cn(
        "relative text-eira-surface overflow-hidden",
        className
      )}
      style={{ borderRadius: 16, ...style }}
    >
      {/* Promo banner */}
      <div
        className="font-sans text-center bg-eira-lime text-eira-forest"
        style={{
          padding: "11px 24px",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.005em",
        }}
      >
        {promoBefore}{" "}
        <em
          className="font-display"
          style={{ fontStyle: "italic", fontWeight: 400, margin: "0 4px" }}
        >
          {promoAccent}
        </em>{" "}
        {promoAfter}{" "}
        <a
          href={promoCtaHref}
          style={{
            color: "inherit",
            textDecoration: "underline",
            textDecorationThickness: 1,
            textUnderlineOffset: 3,
            marginLeft: 6,
          }}
        >
          {promoCtaLabel}
        </a>
      </div>

      {/* Background panel */}
      <div className="relative overflow-hidden" style={{ minHeight: 680, ...bgStyle }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(247,246,244,0.018) 0, rgba(247,246,244,0.018) 2px, transparent 2px, transparent 14px)",
          }}
        />

        <MarketingNav tone="light" items={navItems} ctaLabel="Empezar valoración" />

        <div
          className="grid items-stretch px-14"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            paddingTop: 64,
            paddingBottom: 56,
            minHeight: 680 - 76,
          }}
        >
          {/* Glass container left */}
          <div
            className="self-end border"
            style={{
              background: "rgba(10, 29, 20, 0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderColor: "rgba(247, 246, 244, 0.08)",
              borderRadius: 18,
              padding: "36px 36px 32px",
              maxWidth: 520,
            }}
          >
            <span
              className="inline-flex items-center gap-2 font-sans border"
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(247,246,244,0.06)",
                color: "var(--eira-surface)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.005em",
                borderColor: "rgba(247,246,244,0.10)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "var(--eira-lime)",
                }}
              />
              {pillEyebrow}
            </span>

            <h1
              className="font-display text-eira-surface"
              style={{
                fontWeight: 400,
                fontSize: 60,
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                marginTop: 18,
              }}
            >
              {headline}{" "}
              <em
                className="text-eira-lime"
                style={{ fontStyle: "italic", fontWeight: 400 }}
              >
                {accentWord}
              </em>
              {headlineSuffix}
            </h1>

            <p
              className="font-sans"
              style={{
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(247,246,244,0.78)",
                marginTop: 20,
                maxWidth: 380,
              }}
            >
              {lead}
            </p>

            <div className="flex gap-2.5 items-center" style={{ marginTop: 28 }}>
              <a
                href={ctaHref}
                className="font-sans bg-eira-surface text-eira-forest hover:bg-white"
                style={{
                  borderRadius: 999,
                  padding: "13px 22px",
                  fontWeight: 500,
                  fontSize: 13.5,
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "background 140ms",
                  textDecoration: "none",
                }}
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Benefits bottom-right */}
          <div
            className="self-end justify-self-end grid"
            style={{
              gridTemplateColumns: benefits
                .map((_, i) => (i === 0 ? "1fr" : "1px 1fr"))
                .join(" "),
              gap: 22,
              maxWidth: 520,
              padding: "4px 4px 6px",
            }}
          >
            {benefits.map((b, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    style={{ background: dividerColor, width: 1, alignSelf: "stretch" }}
                  />
                )}
                <div>
                  <div
                    className="font-display text-eira-lime"
                    style={{
                      fontSize: 28,
                      lineHeight: 1,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {b.value}
                  </div>
                  <div
                    className="font-sans text-eira-surface"
                    style={{ fontSize: 13, fontWeight: 500, marginTop: 6 }}
                  >
                    {b.title}
                  </div>
                  {b.sub && (
                    <div
                      className="font-sans"
                      style={{
                        fontSize: 11,
                        color: "rgba(247,246,244,0.6)",
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
        </div>

        {cornerChat !== false && (
          <button
            type="button"
            title="Hablar con un derma"
            className="absolute flex items-center justify-center rounded-full bg-eira-lime text-eira-forest"
            style={{
              right: 24,
              bottom: 24,
              width: 44,
              height: 44,
              border: 0,
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            }}
          >
            {cornerChat ?? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
}

export default MarketingHeroBanner;
