"use client";

import { EiraButton } from "./button";
import { Icons, Sparkle } from "./icons";
import { EiraScreenTopbar } from "./screen-topbar";

export interface EiraConfirmedScreenProps {
  go: (screen: string) => void;
}

const STEPS = [
  "Sube 2 fotos del rostro: una con luz natural, otra con lámpara.",
  "Ten a la mano los productos que estás usando.",
  "Busca un lugar con buena luz frontal.",
];

export function EiraConfirmedScreen({ go }: EiraConfirmedScreenProps) {
  return (
    <div
      style={{
        flex: 1,
        background: "var(--eira-surface)",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EiraScreenTopbar
        title=""
        action={
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => go("home")}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              color: "var(--eira-forest)",
              padding: 6,
            }}
          >
            {Icons.close()}
          </button>
        }
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "var(--eira-lime)",
              color: "var(--eira-forest)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkle size={32} color="var(--eira-forest)" />
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 38,
            lineHeight: 1.05,
            color: "var(--eira-forest)",
            letterSpacing: "-0.02em",
          }}
        >
          Listo, Ana.
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            color: "var(--eira-stone-700)",
            lineHeight: 1.5,
            marginTop: 12,
          }}
        >
          Tu consulta con la{" "}
          <b style={{ color: "var(--eira-forest)" }}>Dra. Mariana Ortiz</b> queda
          confirmada para el{" "}
          <b style={{ color: "var(--eira-forest)" }}>
            martes 14 a las 17:30
          </b>
          .
        </div>

        <div
          style={{
            marginTop: 28,
            background: "#fff",
            borderRadius: 14,
            padding: 16,
            textAlign: "left",
            boxShadow: "0 2px 6px rgba(23,52,37,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--eira-stone-500)",
              marginBottom: 8,
            }}
          >
            antes de tu consulta
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {STEPS.map((t, i) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: "var(--eira-forest-100)",
                    color: "var(--eira-forest)",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--eira-ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EiraButton variant="primary" full size="lg" onClick={() => go("home")}>
        Volver al inicio
      </EiraButton>
    </div>
  );
}
