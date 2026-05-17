import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { EiraButton } from "./button";
import { MarketingNav, type MarketingNavItem } from "./marketing-nav";
import { OverlayBenefits, type OverlayBenefit } from "./overlay-card";

export interface MarketingHeroCta {
  label: string;
  href?: string;
}

export interface MarketingHeroImageProps {
  eyebrow?: string;
  /** Headline plain text. Use `accentWord` for italic lime accent slot. */
  headline?: string;
  accentWord?: string;
  /** Optional second half of the headline, after accent word. */
  headlineSuffix?: string;
  lead?: string;
  primaryCta?: MarketingHeroCta;
  secondaryCta?: MarketingHeroCta;
  /** Right-pane photography. Defaults to /brand/hero-close-hq.png. */
  imageSrc?: string;
  imageAlt?: string;
  /** Pill label that floats on top-left of the photo. */
  floatLabel?: string;
  /** Bottom-line meta caption under the CTAs. */
  metaCaption?: string;
  /** Bottom-of-photo overlay benefit cards. */
  benefits?: OverlayBenefit[];
  navItems?: MarketingNavItem[];
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_BENEFITS: OverlayBenefit[] = [
  { value: "160+", title: "dermatólogos", sub: "Cédula verificada" },
  { value: "2x", title: "seguimiento al mes", sub: "Foto + video" },
  { value: "$890", title: "valoración inicial", sub: "30 min · MXN" },
];

/**
 * Marketing hero — forest dark left pane, image right pane with overlay
 * benefits card. Lime accent word rendered italic in the headline.
 */
export function MarketingHeroImage({
  eyebrow = "— Tu canal de telemedicina",
  headline = "Tu melasma,",
  accentWord = "tratado",
  headlineSuffix = " de cerca.",
  lead = "Eira Skin es un canal de dermatología que pone un protocolo Obagi Nu-Derm personalizado en tus manos — con seguimiento humano, semana tras semana, sin que salgas de casa.",
  primaryCta = { label: "Empezar valoración →", href: "#start" },
  secondaryCta = { label: "Cómo funciona", href: "#how" },
  imageSrc = "/brand/hero-close-hq.png",
  imageAlt = "Paciente atendida por dermatóloga",
  floatLabel = "ATENDIDO POR DERMATÓLOGAS",
  metaCaption = "— consulta inicial · 30 min · $890 MXN",
  benefits = DEFAULT_BENEFITS,
  navItems,
  className,
  style,
}: MarketingHeroImageProps) {
  return (
    <section
      className={cn(
        "bg-eira-forest text-eira-surface overflow-hidden",
        className
      )}
      style={{ borderRadius: 16, ...style }}
    >
      <MarketingNav tone="light" items={navItems} />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] min-h-[640px]">
        {/* Text pane */}
        <div className="flex flex-col justify-between gap-8 px-14 pt-14 pb-12">
          <div className="flex flex-col mt-2">
            <div
              className="font-sans text-[11px] font-medium uppercase opacity-65"
              style={{ letterSpacing: "0.2em" }}
            >
              {eyebrow}
            </div>
            <h1
              className="font-display mt-[18px] text-eira-surface"
              style={{
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: "-0.018em",
                fontSize: 68,
                maxWidth: 580,
              }}
            >
              {headline}
              <br />
              <span
                className="text-eira-lime italic"
                style={{ fontWeight: 400 }}
              >
                {accentWord}
              </span>
              {headlineSuffix}
            </h1>
            <p
              className="font-sans"
              style={{
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.6,
                opacity: 0.78,
                maxWidth: 440,
                marginTop: 24,
              }}
            >
              {lead}
            </p>
            <div className="flex gap-2.5 items-center" style={{ marginTop: 36 }}>
              <EiraButton variant="lime" size="md">
                {primaryCta.label}
              </EiraButton>
              <EiraButton variant="onDark" size="md">
                {secondaryCta.label}
              </EiraButton>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.06em",
                opacity: 0.5,
              }}
            >
              {metaCaption}
            </div>
            <button
              type="button"
              aria-label="Más abajo"
              className="flex items-center justify-center rounded-full"
              style={{
                width: 44,
                height: 44,
                background: "rgba(247,246,244,0.08)",
                color: "var(--eira-surface)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="M6 13l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Photo pane */}
        <div
          className="relative"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={imageAlt}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, rgba(23,52,37,0.18) 0%, rgba(23,52,37,0) 35%)",
            }}
          />

          {floatLabel && (
            <span
              className="absolute inline-flex items-center gap-2 font-sans"
              style={{
                left: 24,
                top: 24,
                padding: "7px 14px",
                borderRadius: 999,
                background: "rgba(23,52,37,0.78)",
                color: "var(--eira-surface)",
                backdropFilter: "blur(8px)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "var(--eira-lime)",
                  boxShadow: "0 0 0 4px rgba(233,253,153,0.18)",
                }}
              />
              {floatLabel}
            </span>
          )}

          {benefits && benefits.length > 0 && (
            <OverlayBenefits
              tone="forest"
              benefits={benefits}
              className="absolute"
              style={{ left: 24, right: 24, bottom: 24 }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default MarketingHeroImage;
