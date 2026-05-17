"use client";

import { EiraAvatar } from "./avatar";
import { EiraButton } from "./button";
import { EiraCard } from "./card";
import { Icon, Icons, Sparkle } from "./icons";
import { EiraPill, type EiraPillTone } from "./pill";

const PHOTO = "/brand/hero-close-hq.png";

export interface EiraHomeScreenProps {
  go: (screen: string) => void;
}

interface Task {
  icon: () => React.ReactNode;
  t: string;
  sub: string;
  tone: EiraPillTone;
  done: boolean;
}

export function EiraHomeScreen({ go }: EiraHomeScreenProps) {
  const tasks: Task[] = [
    {
      icon: () => Icons.camera(),
      t: "Subir foto de seguimiento",
      sub: "Antes de viernes",
      tone: "warning",
      done: false,
    },
    {
      icon: () => Icons.bottle(),
      t: "Aplicar Clear (mañana y noche)",
      sub: "Diario",
      tone: "success",
      done: true,
    },
    {
      icon: () => Icons.shield(),
      t: "Sun Shield SPF 50",
      sub: "Cada 2 horas en exteriores",
      tone: "success",
      done: true,
    },
  ];

  return (
    <div
      style={{
        flex: 1,
        overflow: "auto",
        background: "var(--eira-surface)",
        paddingBottom: 84,
      }}
    >
      {/* greeting */}
      <div style={{ padding: "14px 20px 8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
              — buenos días
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                lineHeight: 1.05,
                color: "var(--eira-forest)",
                marginTop: 4,
                letterSpacing: "-0.02em",
              }}
            >
              Hola, Ana.
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <EiraAvatar size={40} initials="AL" />
            <span
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                color: "var(--eira-forest)",
              }}
            >
              <Sparkle size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* hero plan card */}
      <div style={{ padding: "12px 20px 0" }}>
        <EiraCard dark padding={20} style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <EiraPill tone="lime">Plan activo</EiraPill>
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10,
                color: "rgba(249,248,227,0.6)",
                letterSpacing: "0.06em",
              }}
            >
              SEMANA 4 / 24
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              lineHeight: 1.1,
              color: "var(--eira-surface)",
              marginTop: 14,
              letterSpacing: "-0.01em",
            }}
          >
            Obagi Nu‑Derm · Fase 1
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "rgba(249,248,227,0.72)",
              lineHeight: 1.5,
              marginTop: 6,
            }}
          >
            Limpieza, exfoliación y aclarador. Vamos al ritmo correcto.
          </div>
          <div
            style={{
              height: 5,
              borderRadius: 999,
              background: "rgba(249,248,227,0.18)",
              overflow: "hidden",
              marginTop: 16,
            }}
          >
            <div
              style={{
                width: "18%",
                height: "100%",
                background: "var(--eira-lime)",
                borderRadius: 999,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 14,
            }}
          >
            <EiraButton variant="lime" size="sm" onClick={() => go("plan")}>
              Ver mi plan
            </EiraButton>
            <EiraButton
              variant="onDark"
              size="sm"
              iconRight={Icons.arrowRight()}
              onClick={() => go("upload")}
            >
              Subir foto
            </EiraButton>
          </div>
        </EiraCard>
      </div>

      {/* next consult */}
      <div style={{ padding: "14px 20px 0" }}>
        <EiraCard padding={16}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <EiraAvatar src={PHOTO} size={48} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--eira-stone-500)",
                }}
              >
                Próxima consulta
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--eira-forest)",
                  marginTop: 2,
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
                Mar 14 · 17:30 · video
              </div>
            </div>
            <button
              type="button"
              aria-label="Iniciar videollamada"
              style={{
                background: "var(--eira-surface-200)",
                border: 0,
                borderRadius: 999,
                padding: 10,
                color: "var(--eira-forest)",
                cursor: "pointer",
              }}
            >
              {Icons.video()}
            </button>
          </div>
        </EiraCard>
      </div>

      {/* tasks */}
      <div style={{ padding: "20px 20px 0" }}>
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
          — esta semana
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {tasks.map((task) => (
            <EiraCard
              key={task.t}
              padding={14}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "var(--eira-surface-200)",
                  color: "var(--eira-forest)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {task.icon()}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--eira-forest)",
                    textDecoration: task.done ? "line-through" : "none",
                    opacity: task.done ? 0.5 : 1,
                  }}
                >
                  {task.t}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    color: "var(--eira-stone-500)",
                    marginTop: 2,
                  }}
                >
                  {task.sub}
                </div>
              </div>
              {task.done ? (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 999,
                    background: "#e7f0ea",
                    color: "var(--status-success)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={14}>
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </div>
              ) : (
                <EiraPill tone={task.tone} dot>
                  Pendiente
                </EiraPill>
              )}
            </EiraCard>
          ))}
        </div>
      </div>
    </div>
  );
}
