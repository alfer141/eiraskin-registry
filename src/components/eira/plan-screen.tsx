"use client";

import { EiraCard } from "./card";
import { Icon, Icons, Sparkle } from "./icons";
import { EiraPill } from "./pill";
import { EiraScreenTopbar } from "./screen-topbar";

export interface EiraPlanScreenProps {
  go: (screen: string) => void;
}

interface Product {
  name: string;
  step: string;
  use: string;
  done: boolean;
}

const PRODUCTS: Product[] = [
  { name: "Foaming Cleanser", step: "01 · Limpia", use: "Mañana y noche", done: true },
  { name: "Toner", step: "02 · Equilibra", use: "Mañana y noche", done: true },
  { name: "Clear (4% HQ)", step: "03 · Aclara", use: "Mañana y noche", done: false },
  { name: "Exfoderm", step: "04 · Renueva", use: "Mañana", done: false },
  {
    name: "Sun Shield SPF 50",
    step: "05 · Protege",
    use: "Mañana, reaplica",
    done: false,
  },
];

export function EiraPlanScreen({ go }: EiraPlanScreenProps) {
  return (
    <div
      style={{
        flex: 1,
        overflow: "auto",
        background: "var(--eira-surface)",
        paddingBottom: 84,
      }}
    >
      <EiraScreenTopbar title="Mi plan" onBack={() => go("home")} />
      <div style={{ padding: "4px 20px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--eira-forest-500)",
              }}
            >
              — protocolo personalizado
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                lineHeight: 1.05,
                color: "var(--eira-forest)",
                marginTop: 6,
                letterSpacing: "-0.02em",
              }}
            >
              Obagi Nu‑Derm
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--eira-stone-700)",
                marginTop: 4,
              }}
            >
              Fase 1 · semana 4 de 24
            </div>
          </div>
          <EiraPill tone="success" dot>
            Activo
          </EiraPill>
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {PRODUCTS.map((p, i) => (
            <EiraCard
              key={p.name}
              padding={14}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <div
                style={{
                  width: 44,
                  height: 56,
                  borderRadius: 8,
                  background:
                    i % 2 ? "var(--eira-surface-200)" : "var(--eira-forest-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--eira-forest)",
                  flexShrink: 0,
                }}
              >
                {Icons.bottle()}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 10,
                    color: "var(--eira-stone-500)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.step}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--eira-forest)",
                    marginTop: 2,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    color: "var(--eira-stone-500)",
                    marginTop: 2,
                  }}
                >
                  {p.use}
                </div>
              </div>
              {p.done && (
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: "#e7f0ea",
                    color: "var(--status-success)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={12}>
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </div>
              )}
            </EiraCard>
          ))}
        </div>

        <div
          style={{
            marginTop: 22,
            padding: "14px 16px",
            background: "var(--eira-forest)",
            color: "var(--eira-surface)",
            borderRadius: 14,
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <Sparkle size={20} color="var(--eira-lime)" />
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              lineHeight: 1.5,
            }}
          >
            Tu próximo envío de Clear llega{" "}
            <b style={{ color: "var(--eira-lime)" }}>el 22 de mayo</b>.
          </div>
        </div>
      </div>
    </div>
  );
}
