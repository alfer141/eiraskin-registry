"use client";

import { EiraAvatar } from "./avatar";
import { Icons } from "./icons";

const PHOTO = "/brand/hero-close-hq.png";

export interface EiraDermaScreenProps {
  go: (screen: string) => void;
}

interface Message {
  id: string;
  from: "me" | "derma";
  t: string;
  time: string;
}

const MESSAGES: Message[] = [
  {
    id: "m1",
    from: "derma",
    t: "Hola Ana, vi tus fotos de la semana 2. La pigmentación de la mejilla derecha está respondiendo bien al Clear.",
    time: "10:32",
  },
  {
    id: "m2",
    from: "me",
    t: "Gracias dra! ¿Sigo con Exfoderm 2x por semana?",
    time: "10:40",
  },
  {
    id: "m3",
    from: "derma",
    t: "Sí. Sube a 3x si no notas irritación. Cualquier ardor que dure más de 10 min, me avisas.",
    time: "10:42",
  },
  {
    id: "m4",
    from: "derma",
    t: "Recuerda el SPF cada 2 horas — sin eso no avanzamos.",
    time: "10:42",
  },
];

export function EiraDermaScreen({ go }: EiraDermaScreenProps) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "var(--eira-surface)",
        paddingBottom: 84,
      }}
    >
      <div
        style={{
          padding: "6px 16px 12px",
          borderBottom: "1px solid rgba(23,52,37,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          type="button"
          aria-label="Volver"
          onClick={() => go("home")}
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            color: "var(--eira-forest)",
            padding: 6,
          }}
        >
          {Icons.arrowLeft()}
        </button>
        <EiraAvatar src={PHOTO} size={36} />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--eira-forest)",
            }}
          >
            Dra. Mariana Ortiz
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "var(--status-success)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--status-success)",
              }}
            />
            en línea
          </div>
        </div>
        <button
          type="button"
          aria-label="Iniciar videollamada"
          style={{
            background: "var(--eira-surface-200)",
            border: 0,
            borderRadius: 999,
            padding: 9,
            color: "var(--eira-forest)",
            cursor: "pointer",
          }}
        >
          {Icons.video()}
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {MESSAGES.map((m) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              justifyContent: m.from === "me" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "78%",
                background: m.from === "me" ? "var(--eira-forest)" : "#fff",
                color: m.from === "me" ? "var(--eira-surface)" : "var(--eira-ink)",
                padding: "10px 14px",
                borderRadius: 14,
                borderTopLeftRadius: m.from === "me" ? 14 : 4,
                borderTopRightRadius: m.from === "me" ? 4 : 14,
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                lineHeight: 1.45,
                boxShadow: m.from === "me" ? "none" : "0 1px 2px rgba(23,52,37,0.04)",
              }}
            >
              {m.t}
              <div
                style={{
                  fontSize: 10,
                  opacity: 0.55,
                  marginTop: 4,
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {m.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "10px 14px",
          background: "var(--eira-surface)",
          borderTop: "1px solid rgba(23,52,37,0.06)",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <button
          type="button"
          aria-label="Adjuntar foto"
          style={{
            background: "var(--eira-surface-200)",
            border: 0,
            borderRadius: 999,
            padding: 10,
            color: "var(--eira-forest)",
            cursor: "pointer",
          }}
        >
          {Icons.camera()}
        </button>
        <input
          placeholder="Escribe a tu derma…"
          style={{
            flex: 1,
            background: "#fff",
            border: "1px solid rgba(23,52,37,0.12)",
            borderRadius: 999,
            padding: "10px 16px",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            outline: "none",
          }}
        />
        <button
          type="button"
          aria-label="Enviar mensaje"
          style={{
            background: "var(--eira-forest)",
            border: 0,
            borderRadius: 999,
            padding: 10,
            color: "var(--eira-surface)",
            cursor: "pointer",
          }}
        >
          {Icons.send()}
        </button>
      </div>
    </div>
  );
}
