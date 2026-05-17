"use client";

import { useState } from "react";
import { EiraButton } from "./button";
import { Icon, Icons } from "./icons";
import { EiraPill } from "./pill";
import { EiraScreenTopbar } from "./screen-topbar";

const PHOTO = "/brand/hero-close-hq.png";

export interface EiraUploadScreenProps {
  go: (screen: string) => void;
}

const SLOTS = ["Frente", "Mejilla izq.", "Mejilla der."];

export function EiraUploadScreen({ go }: EiraUploadScreenProps) {
  const [step, setStep] = useState(0);
  return (
    <div
      style={{
        flex: 1,
        background: "var(--eira-surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EiraScreenTopbar title="Foto de seguimiento" onBack={() => go("home")} />
      <div
        style={{
          padding: "4px 20px 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            lineHeight: 1.1,
            color: "var(--eira-forest)",
            letterSpacing: "-0.01em",
          }}
        >
          Semana 4 · 3 fotos
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--eira-stone-700)",
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          Con luz natural, sin maquillaje. La derma las revisa antes del martes.
        </div>

        <div
          style={{
            marginTop: 22,
            position: "relative",
            borderRadius: 18,
            overflow: "hidden",
            aspectRatio: "4/5",
            background: `url('${PHOTO}') center/cover`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 50%, rgba(23,52,37,0.7) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              right: 14,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EiraPill tone="outlineDark">
              {step + 1} / 3 · {SLOTS[step]}
            </EiraPill>
            <EiraPill tone="forest">EN VIVO</EiraPill>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              aria-label="Tomar foto"
              onClick={() => setStep(Math.min(2, step + 1))}
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                background: "var(--eira-surface)",
                border: "4px solid rgba(249,248,227,0.4)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--eira-forest)",
              }}
            >
              {Icons.camera()}
            </button>
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
          {SLOTS.map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                aspectRatio: "1/1",
                borderRadius: 10,
                background:
                  i <= step
                    ? `url('${PHOTO}') center/cover`
                    : "var(--eira-surface-200)",
                boxShadow: "inset 0 0 0 1px rgba(23,52,37,0.12)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--eira-stone-500)",
              }}
            >
              {i > step && Icons.plus()}
              {i <= step && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 6,
                    right: 6,
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: "var(--eira-lime)",
                    color: "var(--eira-forest)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={10}>
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingBottom: 24, paddingTop: 18 }}>
          <EiraButton
            variant="primary"
            full
            size="lg"
            iconRight={Icons.upload()}
            onClick={() => go("home")}
          >
            Enviar a mi derma
          </EiraButton>
        </div>
      </div>
    </div>
  );
}
