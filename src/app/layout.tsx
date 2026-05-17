import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "EIRA Skin · Design System",
  description:
    "Design System de EIRA Skin — tokens, tipografía y componentes para telemedicina dermatológica.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const almarenaDisplay = localFont({
  src: [
    { path: "../../public/fonts/AlmarenaNeueDisplay-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-ExtraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeueDisplay-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const almarenaText = localFont({
  src: [
    { path: "../../public/fonts/AlmarenaNeue-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeue-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/AlmarenaNeue-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/AlmarenaNeue-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-sans-text",
  display: "swap",
});

const poynter = localFont({
  src: [
    { path: "../../public/fonts/PoynterOldstyleDisplay-CondRoman.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={cn(
        almarenaDisplay.variable,
        almarenaText.variable,
        poynter.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
