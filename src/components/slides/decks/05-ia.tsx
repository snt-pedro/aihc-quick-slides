import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

const uses = [
  {
    id: "P1",
    what: "Escopo",
    ai: "Propõe áreas-alvo a partir dos achados da desk research",
    human: "Squad escolhe as 4 áreas e confere no app",
  },
  {
    id: "P2",
    what: "Protocolo",
    ai: "Rascunha a ficha de registro e o guia de severidade",
    human: "Squad calibra a escala com um exemplo real",
  },
];

/** Qual cartão da esquerda corresponde ao prompt mostrado à direita. */
const SHOWN_PROMPT = "P2";

// Texto literal do prompt inicial; manter igual a prompts/P3-protocolo.md.
const prompt = {
  context:
    "Cinco avaliadores vão inspecionar o app Pinterest para Android, cada um sozinho, usando as 10 heurísticas de Nielsen e a escala de severidade de 0 a 4 (0 não é problema, 1 cosmético, 2 pequeno, 3 grande, 4 catastrófico).",
  lead: "Crie:",
  items: [
    "Uma ficha de registro de problema (campos, com uma frase explicando cada um) que permita depois juntar os achados dos 5 avaliadores sem perder quem viu o quê.",
    "Um guia curto para aplicar a escala de severidade de forma consistente entre os avaliadores, considerando frequência, impacto e persistência do problema.",
    "Um exemplo preenchido usando um problema hipotético, claramente marcado como hipotético.",
  ],
  constraint: "Não classifique problemas reais do Pinterest: isso será feito pelos avaliadores.",
};

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Distância entre o título e as colunas: maior = colunas mais para baixo. */
  titleGap: 50,
  /** Espaço entre as duas colunas. */
  columnsGap: 56,
  /** Largura relativa da coluna da esquerda (a da direita vale 1). */
  leftColumn: 0.8,
  /** Deslocamento vertical da coluna da esquerda: negativo = sobe, positivo = desce. */
  leftColumnOffsetY: 0,
  /** Espaço interno e entre os cartões P1–P3. */
  usePadding: "46px 32px",
  usesGap: 28,
  /** Espaço interno do cartão do prompt. */
  promptPadding: "36px 44px",
  /** Tamanho do texto do prompt. */
  promptFontSize: 23,
  /** Espaço vertical entre os blocos do prompt. */
  promptGap: 22,
};

const promptText = { fontSize: LAYOUT.promptFontSize, lineHeight: 1.4 } as const;

export default function Ia({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="O apoio da IA no planejamento">
      <div className="flex flex-1 flex-col" style={{ gap: LAYOUT.titleGap }}>
        <SlideTitle>
          Onde a <span style={{ color: "var(--slide-red)" }}>IA</span> entra/entrou
        </SlideTitle>

        <div className="flex flex-1" style={{ gap: LAYOUT.columnsGap }}>
          {/* onde entra */}
          <div
            className="flex flex-col"
            style={{
              flex: LAYOUT.leftColumn,
              gap: LAYOUT.usesGap,
              marginTop: LAYOUT.leftColumnOffsetY,
            }}
          >
            {uses.map((u) => (
              <div
                key={u.id}
                className="slide-pin grid items-center"
                style={{
                  gridTemplateColumns: "96px 1fr",
                  padding: LAYOUT.usePadding,
                  gap: 24,
                  boxShadow: u.id === SHOWN_PROMPT ? "inset 0 0 0 3px var(--slide-fg)" : undefined,
                }}
              >
                <span
                  className="slide-chip slide-chip-red"
                  style={{ textAlign: "center", padding: "14px 0" }}
                >
                  {u.id}
                </span>
                <div className="flex flex-col" style={{ gap: 6 }}>
                  <span className="slide-body" style={{ fontWeight: 700 }}>
                    {u.what}: <span style={{ fontWeight: 500 }}>{u.ai}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* prompt inicial */}
          <div className="flex flex-col" style={{ flex: 1, gap: 18 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Prompt inicial · {SHOWN_PROMPT} Protocolo
            </span>
            <div
              className="flex flex-col"
              style={{
                padding: LAYOUT.promptPadding,
                gap: LAYOUT.promptGap,
                borderRadius: 32,
                borderBottomLeftRadius: 8,
                background: "var(--slide-fg)",
                color: "var(--slide-bg)",
              }}
            >
              <p className="m-0" style={promptText}>
                {prompt.context}
              </p>

              <div className="flex flex-col" style={{ gap: 14 }}>
                <span style={{ ...promptText, fontWeight: 700 }}>{prompt.lead}</span>
                <ol className="m-0 flex list-none flex-col p-0" style={{ gap: 12 }}>
                  {prompt.items.map((item, i) => (
                    <li key={i} className="flex" style={{ gap: 16 }}>
                      <span
                        className="slide-num flex shrink-0 items-center justify-center"
                        style={{
                          width: 34,
                          height: 34,
                          marginTop: 1,
                          borderRadius: 999,
                          background: "var(--slide-red)",
                          color: "#fff",
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={promptText}>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p
                className="m-0"
                style={{
                  ...promptText,
                  fontWeight: 600,
                  paddingTop: LAYOUT.promptGap,
                  borderTop: "1px solid rgba(246, 241, 233, 0.2)",
                }}
              >
                {prompt.constraint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
