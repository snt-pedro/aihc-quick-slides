import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

const concepts = [
  { term: "Pin", desc: "Imagem ou vídeo salvo, com link para a fonte" },
  { term: "Pasta (board)", desc: "Coleção temática onde o usuário organiza seus pins" },
  { term: "Feed", desc: "Ideias recomendadas a partir do que o usuário salva e busca" },
];

// Números da desk research do projeto de UX (reviews 1–2★ da Play Store).
const reasons = [
  {
    big: "43%",
    title: "Problemas de interface relatados",
    desc: "13 de 30 reviews negativos recentes apontam algo que um redesign resolveria. 2º lugar entre 100 apps",
  },
  {
    big: "H4 · H8 · H3",
    title: "Hipóteses já levantadas",
    desc: "Consistência, estética minimalista e controle do usuário foram as heurísticas mais citadas nos reviews",
  },
  {
    big: "UX",
    title: "Produto-cliente do squad",
    desc: "A inspeção alimenta a etapa Descobrir do redesign do Pinterest na disciplina de UX",
  },
];

export default function Sistema({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Sistema avaliado">
      <div className="flex flex-1 flex-col" style={{ gap: 48 }}>
        <SlideTitle>
          Pinterest: <span style={{ color: "var(--slide-red)" }}>curadoria visual</span> em pastas
        </SlideTitle>

        <div className="flex flex-1" style={{ gap: 64 }}>
          {/* o que é */}
          <div className="flex flex-col" style={{ flex: 0.85, gap: 28 }}>
            <span className="slide-body" style={{ color: "#444" }}>
              Rede de descoberta de ideias com mais de 500 milhões de usuários por mês. Avaliamos o{" "}
              <b style={{ color: "var(--slide-fg)" }}>app Android</b>, com conta logada.
            </span>
            <div className="flex flex-col" style={{ gap: 16 }}>
              {concepts.map((c) => (
                <div key={c.term} className="slide-pin flex flex-col" style={{ padding: "24px 32px", gap: 6 }}>
                  <span className="slide-body" style={{ fontWeight: 700 }}>
                    {c.term}
                  </span>
                  <span className="slide-caption" style={{ color: "#444" }}>
                    {c.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* por que */}
          <div className="flex flex-col" style={{ flex: 1, gap: 20 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Por que o Pinterest
            </span>
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="slide-pin-outline grid items-center"
                style={{ gridTemplateColumns: "260px 1fr", padding: "26px 36px", gap: 32 }}
              >
                <span
                  className="slide-display slide-num"
                  style={{
                    fontSize: r.big.length > 4 ? 40 : 64,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: i === 0 ? "var(--slide-red)" : "var(--slide-fg)",
                  }}
                >
                  {r.big}
                </span>
                <div className="flex flex-col" style={{ gap: 6 }}>
                  <span className="slide-body" style={{ fontWeight: 700 }}>
                    {r.title}
                  </span>
                  <span className="slide-caption" style={{ color: "#444" }}>
                    {r.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
