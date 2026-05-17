import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface MarketingNavItem {
  label: string;
  href: string;
}

export interface MarketingNavProps {
  /**
   * Logo color treatment. `light` uses the cream wordmark (on forest/photo
   * backgrounds), `forest` uses the dark wordmark (on cream backgrounds).
   */
  tone?: "light" | "forest";
  items?: MarketingNavItem[];
  loginLabel?: string;
  loginHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Show login link before CTA. Defaults to true. */
  showLogin?: boolean;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_ITEMS: MarketingNavItem[] = [
  { label: "Cómo funciona", href: "#how" },
  { label: "Obagi Nu-Derm", href: "#obagi" },
  { label: "Dermatólogos", href: "#derma" },
];

export function MarketingNav({
  tone = "light",
  items = DEFAULT_ITEMS,
  loginLabel = "Iniciar sesión",
  loginHref = "#login",
  ctaLabel = "Empezar →",
  ctaHref = "#start",
  showLogin = true,
  className,
  style,
}: MarketingNavProps) {
  const isLight = tone === "light";
  const logoSrc = isLight ? "/brand/logo-light.svg" : "/brand/logo-forest.svg";
  const linkColor = isLight ? "text-eira-surface" : "text-eira-forest";

  return (
    <header
      className={cn(
        "flex items-center justify-between font-sans",
        "px-14 pt-7",
        linkColor,
        className
      )}
      style={style}
    >
      <a href="/" className="flex items-center gap-2.5">
        <img
          src={logoSrc}
          alt="eira skin"
          className="block h-[22px] w-auto"
        />
      </a>

      <nav
        className="hidden md:flex gap-[30px] text-[13px] font-medium"
        style={{ letterSpacing: "0.005em" }}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="opacity-90 hover:opacity-100 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="inline-flex items-center gap-[18px]">
        {showLogin && (
          <a
            href={loginHref}
            className="hidden sm:inline text-[13px] font-medium no-underline"
          >
            {loginLabel}
          </a>
        )}
        <a
          href={ctaHref}
          className={cn(
            "inline-flex items-center rounded-full font-medium text-[13px]",
            "px-[18px] py-[9px] cursor-pointer transition-colors",
            "bg-eira-lime text-eira-forest hover:brightness-95"
          )}
          style={{ letterSpacing: "0.005em" }}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export default MarketingNav;
