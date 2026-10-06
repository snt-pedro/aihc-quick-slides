import { Fragment } from "react";
import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

const why = [
  {
    t: "5 integrantes = 5 avaliadores",
    d: "De 3 a 5 avaliadores independentes já encontram a maior parte dos problemas (Nielsen, 1994)",
  },
  {
    t: "Barata e rápida",
    d: "Não depende de recrutar usuários, cabe no prazo da disciplina",
  },
  {
    t: "Complementa o teste com usuários",
    d: "Inspeção agora; o redesign de UX será testado com usuários no fim do semestre",
  },
];

// Atividades da avaliação heurística (Barbosa & Silva, 2010)
const steps = [
  { name: "Preparação", d: "Escopo, heurísticas, avaliadores, severidade", when: "Entrega 1", now: true },
  { name: "Coleta", d: "Cada avaliador inspeciona sozinho", when: "Entrega 2" },
  { name: "Interpretação", d: "Problema → heurística + severidade", when: "Entrega 2" },
  { name: "Consolidação", d: "Junta e revisa os achados do squad", when: "Entrega 2" },
  { name: "Relato", d: "Problemas priorizados", when: "Entrega 2" },
];

const heuristics = [
  "H1 Visibilidade do status",
  "H2 Mundo real",
  "H3 Controle e liberdade",
  "H4 Consistência e padrões",
  "H5 Prevenção de erros",
  "H6 Reconhecer em vez de lembrar",
  "H7 Flexibilidade e eficiência",
  "H8 Estética minimalista",
  "H9 Recuperação de erros",
  "H10 Ajuda e documentação",
];

export default function Metodo({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Método de avaliação">
      <div className="flex flex-1 flex-col" style={{ gap: 32 }}>
        <div className="flex flex-col" style={{ gap: 16 }}>
          <SlideTitle>Avaliação heurística</SlideTitle>
          <span className="slide-body" style={{ color: "#444" }}>
            Inspeção por especialistas: avaliadores percorrem a interface e julgam cada tela contra as
            10 heurísticas de Nielsen, sem a presença de usuários{" "}
            <span style={{ color: "var(--slide-muted)" }}>(Nielsen, 1994; Barbosa &amp; Silva, 2010)</span>.
          </span>
        </div>

        <div className="grid grid-cols-3" style={{ gap: 24 }}>
          {why.map((w) => (
            <div key={w.t} className="slide-pin flex flex-col" style={{ padding: "24px 32px", gap: 8 }}>
              <span className="slide-body" style={{ fontWeight: 700 }}>
                {w.t}
              </span>
              <span className="slide-caption" style={{ color: "#444" }}>
                {w.d}
              </span>
            </div>
          ))}
        </div>

        {/* atividades */}
        <div className="flex items-stretch" style={{ gap: 12 }}>
          {steps.map((s, i) => (
            <Fragment key={s.name}>
              <div
                className="flex flex-1 flex-col"
                style={{
                  padding: "22px 26px",
                  gap: 6,
                  borderRadius: 24,
                  background: s.now ? "var(--slide-red-soft)" : "transparent",
                  border: s.now ? "2px solid var(--slide-red)" : "2px solid var(--slide-line)",
                }}
              >
                <span
                  className="slide-kicker"
                  style={{ fontSize: 16, color: s.now ? "var(--slide-red)" : "var(--slide-muted)" }}
                >
                  {s.when}
                </span>
                <span className="slide-body" style={{ fontWeight: 700, color: s.now ? "var(--slide-red)" : undefined }}>
                  {s.name}
                </span>
                <span className="slide-caption" style={{ color: "#444", fontSize: 22 }}>
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

        <div className="flex flex-wrap" style={{ gap: 10 }}>
          {heuristics.map((h) => (
            <span key={h} className="slide-chip" style={{ fontSize: 19, padding: "10px 18px" }}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
