"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { EiraButton } from "./button";
import { MarketingNav, type MarketingNavItem } from "./marketing-nav";

export interface MarketingHeroCenteredProps {
  eyebrow?: string;
  headline?: string;
  accentWord?: string;
  headlineSuffix?: string;
  lead?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  /** Image used as video poster behind the play button. */
  imageSrc?: string;
  videoMeta?: string;
  footerItems?: string[];
  navItems?: MarketingNavItem[];
  onPlay?: () => void;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_FOOTER = [
  "+ 200 dermatólogos certificados",
  "· CDMX · GDL · MTY",
  "· seguimiento por foto cada 2 semanas",
];

/**
 * Centered marketing hero with a poster-image video block and play CTA.
 * Renders on forest dark background.
 */
export function MarketingHeroCentered({
  eyebrow = "— Telemedicina · México · Obagi Nu-Derm",
  headline = "La consulta dermatológica que",
  accentWord = "cabe",
  headlineSuffix = " en tu casa.",
  lead = "Mira cómo Ana pasó de 8 años de melasma a un protocolo personalizado, sin pisar un consultorio.",
  primaryCtaLabel = "Empezar valoración →",
  secondaryCtaLabel = "Hablar con un derma",
  imageSrc = "/brand/hero-close-hq.png",
  videoMeta = "CASO REAL · ANA L. · 12 SEMANAS",
  footerItems = DEFAULT_FOOTER,
  navItems,
  onPlay,
  className,
  style,
}: MarketingHeroCenteredProps) {
  return (
    <section
      className={cn(
        "bg-eira-forest text-eira-surface overflow-hidden",
        className
      )}
      style={{ borderRadius: 16, ...style }}
    >
      <MarketingNav tone="light" items={navItems} />

      <div
        className="relative flex flex-col items-center text-center px-14"
        style={{ minHeight: 660, paddingTop: 50, paddingBottom: 56 }}
      >
        <div
          className="font-sans text-[11px] font-medium uppercase opacity-65"
          style={{ letterSpacing: "0.2em" }}
        >
          {eyebrow}
        </div>

        <h1
          className="font-display text-eira-surface text-center"
          style={{
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "-0.018em",
            fontSize: 80,
            maxWidth: 820,
            marginTop: 24,
          }}
        >
          {headline}{" "}
          <span className="text-eira-lime italic" style={{ fontWeight: 400 }}>
            {accentWord}
          </span>
          {headlineSuffix}
        </h1>

        <p
          className="font-sans text-center mx-auto"
          style={{
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.6,
            opacity: 0.78,
            maxWidth: 520,
            marginTop: 22,
          }}
        >
          {lead}
        </p>

        <div className="flex gap-2.5 items-center justify-center" style={{ marginTop: 28 }}>
          <EiraButton variant="lime" size="md">
            {primaryCtaLabel}
          </EiraButton>
          <EiraButton variant="onDark" size="md">
            {secondaryCtaLabel}
          </EiraButton>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            marginTop: 38,
            width: "min(720px, 78%)",
            aspectRatio: "16 / 10",
            borderRadius: 18,
            background: "#0a1d14",
            boxShadow:
              "0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(247,246,244,0.06)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.92,
              filter: "saturate(0.92)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(23,52,37,0) 30%, rgba(23,52,37,0.45) 100%), linear-gradient(180deg, rgba(23,52,37,0.15) 0%, rgba(23,52,37,0.55) 100%)",
            }}
          />

          <span
            className="absolute font-sans inline-flex gap-2 items-center"
            style={{
              left: 18,
              bottom: 16,
              color: "var(--eira-surface)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.06em",
              zIndex: 2,
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
            {videoMeta}
          </span>

          <button
            type="button"
            aria-label="Reproducir video"
            onClick={onPlay}
            className="absolute flex items-center justify-center rounded-full bg-eira-lime text-eira-forest"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 72,
              height: 72,
              border: 0,
              cursor: "pointer",
              zIndex: 2,
              boxShadow: "0 0 0 8px rgba(233,253,153,0.12)",
              transition: "transform 140ms cubic-bezier(.22,.61,.36,1)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 0,
                height: 0,
                borderLeft: "18px solid currentColor",
                borderTop: "11px solid transparent",
                borderBottom: "11px solid transparent",
                marginLeft: 4,
              }}
            />
          </button>
        </div>

        <div
          className="flex gap-9 font-mono"
          style={{
            marginTop: 26,
            fontSize: 11,
            letterSpacing: "0.06em",
            opacity: 0.55,
          }}
        >
          {footerItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketingHeroCentered;
