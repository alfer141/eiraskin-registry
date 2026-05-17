"use client";

import { useState } from "react";
import { EiraAvatar } from "./avatar";
import { EiraButton } from "./button";
import { EiraCard } from "./card";
import { Icons } from "./icons";
import { EiraPill } from "./pill";
import { EiraScreenTopbar } from "./screen-topbar";

const PHOTO = "/brand/hero-close-hq.png";

export interface EiraBookingScreenProps {
  go: (screen: string) => void;
}

interface Slot {
  id: string;
  day: string;
  time: string;
}

const SLOTS: Slot[] = [
  { id: "lun-1100", day: "Lun 13", time: "11:00" },
  { id: "lun-1700", day: "Lun 13", time: "17:00" },
  { id: "mar-1530", day: "Mar 14", time: "15:30" },
  { id: "mar-1730", day: "Mar 14", time: "17:30" },
  { id: "mie-1000", day: "Mié 15", time: "10:00" },
  { id: "mie-1830", day: "Mié 15", time: "18:30" },
];

export function EiraBookingScreen({ go }: EiraBookingScreenProps) {
  const [slot, setSlot] = useState("mar-1730");

  return (
    <div
      style={{
        flex: 1,
        overflow: "auto",
        background: "var(--eira-surface)",
        paddingBottom: 24,
      }}
    >
      <EiraScreenTopbar title="Agendar consulta" onBack={() => go("home")} />
      <div style={{ padding: "4px 20px 0" }}>
        <EiraCard
          padding={16}
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <EiraAvatar src={PHOTO} size={56} />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15,
                color: "var(--eira-forest)",
              }}
            >
              Dra. Mariana Ortiz
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                color: "var(--eira-stone-700)",
                marginTop: 2,
              }}
            >
              Dermatóloga · pigmentación
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <EiraPill tone="sage">Melasma</EiraPill>
              <EiraPill tone="neutral">Obagi Nu‑Derm</EiraPill>
            </div>
          </div>
        </EiraCard>

        <div style={{ marginTop: 18 }}>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--eira-stone-500)",
              marginBottom: 10,
            }}
          >
            — horarios disponibles
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 10,
            }}
          >
            {SLOTS.map((s) => {
              const on = slot === s.id;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSlot(s.id)}
                  style={{
                    background: on ? "var(--eira-forest)" : "#fff",
                    color: on ? "var(--eira-surface)" : "var(--eira-forest)",
                    border: 0,
                    borderRadius: 12,
                    padding: "12px 14px",
                    boxShadow: on ? "none" : "inset 0 0 0 1px rgba(23,52,37,0.12)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                    transition: "background 140ms",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      opacity: 0.7,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.day}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{s.time}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            padding: "14px 16px",
            background: "rgba(118,149,135,0.16)",
            borderRadius: 12,
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          <div style={{ color: "var(--eira-forest)", marginTop: 1 }}>
            {Icons.clock()}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              color: "var(--eira-forest-500)",
              lineHeight: 1.5,
            }}
          >
            Consulta de 30 min por video. Te enviaremos un link a tu correo y por
            WhatsApp 10 min antes.
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <EiraButton
            variant="primary"
            full
            size="lg"
            iconRight={Icons.arrowRight()}
            onClick={() => go("confirmed")}
          >
            Confirmar martes 14, 17:30
          </EiraButton>
        </div>
      </div>
    </div>
  );
}
