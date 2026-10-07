import { Fragment } from "react";
import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

// Atividades da avaliação heurística (Barbosa & Silva, 2010)
const steps = [
  {
    name: "Preparação",
    d: "Escopo, heurísticas, avaliadores, severidade",
    when: "Entrega 1",
    now: true,
  },
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

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Espaço vertical entre título, atividades e heurísticas. */
  sectionsGap: 32,
  /** Espaço interno dos cartões das atividades. */
  stepPadding: "22px 26px",
  /** Tamanho do número (1–5) das atividades. */
  stepNumberSize: 40,
  /**
   * Altura de cada linha de cartões das heurísticas.
   * null = as duas linhas esticam até o rodapé; um número fixa a altura (ex.: 90).
   */
  heuristicRowHeight: 120 as number | null,
  /** Espaço interno dos cartões das heurísticas. */
  heuristicPadding: "12px 24px",
  /** Espaço entre os cartões das heurísticas. */
  heuristicsGap: 14,
};

export default function Metodo({ index, total }: SlideProps) {
  const fixedRows = LAYOUT.heuristicRowHeight !== null;
  return (
    <SlideLayout index={index} total={total} kicker="Método de avaliação">
      <div className="flex flex-1 flex-col" style={{ gap: LAYOUT.sectionsGap }}>
        <div className="flex flex-col" style={{ gap: 16 }}>
          <SlideTitle>Avaliação heurística</SlideTitle>
          <span className="slide-body-lg" style={{ color: "#444" }}>
            Inspeção sem a presença de usuários{" "}
            <span style={{ color: "var(--slide-muted)" }}>
              (Nielsen, 1994; Barbosa &amp; Silva, 2010)
            </span>
            .
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
                    padding: LAYOUT.stepPadding,
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
                        fontSize: LAYOUT.stepNumberSize,
                        fontWeight: 800,
                        lineHeight: 1,
                        color: s.now ? "var(--slide-red)" : "var(--slide-line)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="slide-kicker"
                      style={{
                        fontSize: 16,
                        color: s.now ? "var(--slide-red)" : "var(--slide-muted)",
                      }}
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
        <div className={fixedRows ? "flex flex-col" : "flex flex-1 flex-col"} style={{ gap: 18 }}>
          <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
            As 10 heurísticas de Nielsen
          </span>
          <div
            className={fixedRows ? "grid grid-cols-5" : "grid flex-1 grid-cols-5 grid-rows-2"}
            style={{
              gap: LAYOUT.heuristicsGap,
              gridTemplateRows: fixedRows ? `repeat(2, ${LAYOUT.heuristicRowHeight}px)` : undefined,
            }}
          >
            {heuristics.map((h) => (
              <div
                key={h.id}
                className="slide-pin flex flex-col justify-center"
                style={{ padding: LAYOUT.heuristicPadding, gap: 2 }}
              >
                <span
                  className="slide-num"
                  style={{ fontSize: 22, fontWeight: 800, color: "var(--slide-red)" }}
                >
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
