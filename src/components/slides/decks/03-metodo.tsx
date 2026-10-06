import { Fragment } from "react";
import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

// Atividades da avaliação heurística (Barbosa & Silva, 2010)
const steps = [
  { name: "Preparação", d: "Escopo, heurísticas, avaliadores, severidade", when: "Entrega 1", now: true },
  { name: "Coleta", d: "Cada avaliador inspeciona sozinho", when: "Entrega 2" },
  { name: "Interpretação", d: "Problema → heurística + severidade", when: "Entrega 2" },
  { name: "Consolidação", d: "Junta e revisa os achados do squad", when: "Entrega 2" },
  { name: "Relato", d: "Problemas priorizados", when: "Entrega 2" },
];

const heuristics = [
  { id: "H1", name: "Visibilidade do status" },
  { id: "H2", name: "Mundo real" },
  { id: "H3", name: "Controle e liberdade" },
  { id: "H4", name: "Consistência e padrões" },
  { id: "H5", name: "Prevenção de erros" },
  { id: "H6", name: "Reconhecer em vez de lembrar" },
  { id: "H7", name: "Flexibilidade e eficiência" },
  { id: "H8", name: "Estética minimalista" },
  { id: "H9", name: "Recuperação de erros" },
  { id: "H10", name: "Ajuda e documentação" },
];

export default function Metodo({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Método de avaliação">
      <div className="flex flex-1 flex-col" style={{ gap: 32 }}>
        <div className="flex flex-col" style={{ gap: 16 }}>
          <SlideTitle>Avaliação heurística</SlideTitle>
          <span className="slide-body-lg" style={{ color: "#444" }}>
            Inspeção sem a presença de usuários{" "}
            <span style={{ color: "var(--slide-muted)" }}>(Nielsen, 1994; Barbosa &amp; Silva, 2010)</span>.
          </span>
        </div>

        {/* atividades */}
        <div className="flex flex-col" style={{ gap: 18 }}>
          <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
            Atividades
          </span>
          <div className="flex items-stretch" style={{ gap: 14 }}>
            {steps.map((s, i) => (
              <Fragment key={s.name}>
                <div
                  className="flex flex-1 flex-col"
                  style={{
                    padding: "22px 26px",
                    gap: 6,
                    borderRadius: 28,
                    background: s.now ? "var(--slide-red-soft)" : "transparent",
                    border: s.now ? "2px solid var(--slide-red)" : "2px solid var(--slide-line)",
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className="slide-display slide-num"
                      style={{
                        fontSize: 40,
                        fontWeight: 800,
                        lineHeight: 1,
                        color: s.now ? "var(--slide-red)" : "var(--slide-line)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="slide-kicker"
                      style={{ fontSize: 16, color: s.now ? "var(--slide-red)" : "var(--slide-muted)" }}
                    >
                      {s.when}
                    </span>
                  </div>
                  <span
                    className="slide-body"
                    style={{ fontWeight: 700, color: s.now ? "var(--slide-red)" : undefined }}
                  >
                    {s.name}
                  </span>
                  <span className="slide-caption" style={{ color: "#444" }}>
                    {s.d}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <span className="slide-body self-center" style={{ color: "var(--slide-muted)" }}>
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* heurísticas */}
        <div className="flex flex-1 flex-col" style={{ gap: 18 }}>
          <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
            As 10 heurísticas de Nielsen
          </span>
          <div className="grid flex-1 grid-cols-5 grid-rows-2" style={{ gap: 14 }}>
            {heuristics.map((h) => (
              <div
                key={h.id}
                className="slide-pin flex flex-col justify-center"
                style={{ padding: "12px 24px", gap: 2 }}
              >
                <span className="slide-num" style={{ fontSize: 22, fontWeight: 800, color: "var(--slide-red)" }}>
                  {h.id}
                </span>
                <span className="slide-caption" style={{ fontWeight: 600 }}>
                  {h.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
