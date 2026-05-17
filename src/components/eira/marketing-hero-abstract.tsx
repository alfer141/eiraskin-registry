import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { MarketingNav, type MarketingNavItem } from "./marketing-nav";

export interface MarketingHeroAbstractProps {
  eyebrow?: string;
  headline?: string;
  accentWord?: string;
  headlineSuffix?: string;
  lead?: string;
  scrollLabel?: string;
  navItems?: MarketingNavItem[];
  className?: string;
  style?: CSSProperties;
}

/**
 * Forest-flat marketing hero with no photography — text left, abstract
 * radial/sparkle SVG burst right. Lime accent word italic inline.
 */
export function MarketingHeroAbstract({
  eyebrow = "— Telemedicina dermatológica",
  headline = "Donde la piel",
  accentWord = "se cuida",
  headlineSuffix = " con criterio clínico.",
  lead = "Una dermatóloga te valora por video, ajusta tu protocolo Obagi Nu-Derm y te acompaña cada semana — sin filtros, sin promesas, con tu foto de seguimiento en la mano.",
  scrollLabel = "desplaza para conocer",
  navItems,
  className,
  style,
}: MarketingHeroAbstractProps) {
  return (
    <section
      className={cn(
        "bg-eira-forest text-eira-surface overflow-hidden",
        className
      )}
      style={{ borderRadius: 16, ...style }}
    >
      <MarketingNav tone="light" items={navItems} />

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] min-h-[580px] items-stretch">
        <div className="flex flex-col justify-between px-14 py-14">
          <div>
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
                fontSize: 72,
                maxWidth: 620,
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
                marginTop: 22,
              }}
            >
              {lead}
            </p>
          </div>

          <div
            className="flex items-center gap-[14px] self-end font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            <span>{scrollLabel}</span>
            <span
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
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center p-10">
          <div
            aria-hidden="true"
            style={{
              width: 280,
              height: 280,
              animation: "eira-hero-float 8s ease-in-out infinite alternate",
            }}
          >
            <svg
              viewBox="-150 -150 300 300"
              style={{ width: "100%", height: "100%", overflow: "visible" }}
            >
              <circle cx="0" cy="0" r="88" fill="rgba(118,149,135,0.10)" />
              <circle
                cx="0"
                cy="0"
                r="48"
                fill="none"
                stroke="rgba(118,149,135,0.45)"
                strokeWidth="1"
              />
              <g stroke="#e9fd99" strokeWidth="2.2" strokeLinecap="round">
                {Array.from({ length: 24 }).map((_, i) => {
                  const lengths = [128, 115, 128, 100, 128, 115];
                  const y2 = -lengths[i % lengths.length];
                  return (
                    <line
                      key={i}
                      x1="0"
                      y1="-60"
                      x2="0"
                      y2={y2}
                      transform={`rotate(${i * 15})`}
                    />
                  );
                })}
              </g>
              <path
                d="M0,-22 L4,-4 L22,0 L4,4 L0,22 L-4,4 L-22,0 L-4,-4 Z"
                fill="#e9fd99"
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes eira-hero-float {
          from { transform: translateY(-4px) rotate(-1.5deg); }
          to   { transform: translateY(4px)  rotate(1.5deg); }
        }
      `}</style>
    </section>
  );
}

export default MarketingHeroAbstract;
