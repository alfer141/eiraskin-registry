"use client";

import { Icons } from "./icons";

export type EiraTabId = "home" | "plan" | "derma" | "me";

export interface EiraBottomTabsProps {
  active: EiraTabId;
  onChange: (id: EiraTabId) => void;
}

const TABS: { id: EiraTabId; label: string; icon: () => React.ReactNode }[] = [
  { id: "home", label: "Inicio", icon: () => Icons.home() },
  { id: "plan", label: "Mi plan", icon: () => Icons.bottle() },
  { id: "derma", label: "Mi derma", icon: () => Icons.message() },
  { id: "me", label: "Yo", icon: () => Icons.user() },
];

export function EiraBottomTabs({ active, onChange }: EiraBottomTabsProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "var(--eira-surface)",
        borderTop: "1px solid rgba(23,52,37,0.08)",
        paddingTop: 10,
        paddingBottom: 24,
      }}
    >
      {TABS.map((t) => {
        const on = active === t.id;
        return (
          <button
            type="button"
            key={t.id}
            onClick={() => onChange(t.id)}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              color: on ? "var(--eira-forest)" : "var(--eira-stone-500)",
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "4px 0",
            }}
          >
            {t.icon()}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
