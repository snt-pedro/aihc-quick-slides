import { SlideLayout, Todo, type SlideProps } from "../SlideLayout";

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Tamanho da fonte do título. */
  titleSize: 116,
  /** Espaço entre o subtítulo pequeno e o título. */
  titleGap: 36,
  /** Recuo do bloco de texto a partir do topo. */
  textTop: 20,
  /** Deslocamento vertical do texto. Apenas o 'Pinterest'. */
  textPinOffsetX: 0,
  /** Espaço entre a coluna de texto e a da logo. */
  columnsGap: 80,
  /** Largura relativa da coluna da logo (a de texto vale 1). */
  logoColumn: 0.45,
  /** Tamanho máximo da logo. */
  logoSize: 1560,
  /** Deslocamento horizontal da logo: negativo = esquerda, positivo = direita. */
  logoOffsetX: -420,
  /** Deslocamento vertical da logo: negativo = sobe, positivo = desce. */
  logoOffsetY: 20,
};

// Preencher nome completo e matrícula de cada integrante.
const team: { name: string; id?: string }[] = [
  { name: "Jardel, Pedro, Avelino, Júlio e Luis", id: "" },
];

export default function Capa({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} bare>
      <div className="flex flex-1 items-stretch justify-between" style={{ gap: LAYOUT.columnsGap }}>
        <div
          className="flex flex-1 flex-col justify-between"
          style={{ paddingTop: LAYOUT.textTop }}
        >
          <div className="flex flex-col" style={{ gap: LAYOUT.titleGap }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Avaliação de IHC com apoio de IA
            </span>
            <h1
              className="slide-display slide-title-lg"
              style={{
                fontWeight: 800,
                fontSize: LAYOUT.titleSize,
                lineHeight: 1.02,
                whiteSpace: "nowrap",
              }}
            >
              Avaliação de IHC:
              <br />
              {/* <span style={{ color: "var(--slide-red)" }}>Pinterest</span> implementando o textPinOffsetX */}
              <span
                style={{
                  color: "var(--slide-red)",
                  display: "inline-block",
                  transform: `translateX(${LAYOUT.textPinOffsetX}px)`,
                }}
              > 
                Pinterest
              </span>
            </h1>
          </div>

          <div className="flex flex-col" style={{ gap: 18 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Squad: Amigos do Nielsen
            </span>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {team.map((m) => (
                <div key={m.name} className="flex items-baseline slide-body" style={{ gap: 20 }}>
                  <span style={{ fontWeight: 600 }}>{m.name}</span>
                  <span className="slide-num" style={{ color: "var(--slide-muted)" }}>
                    {m.id ?? <Todo>matrícula</Todo>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center" style={{ flex: LAYOUT.logoColumn }}>
          <img
            src="/pinterest.png"
            alt="Pinterest"
            style={{
              maxWidth: LAYOUT.logoSize,
              maxHeight: LAYOUT.logoSize,
              objectFit: "contain",
              transform: `translate(${LAYOUT.logoOffsetX}px, ${LAYOUT.logoOffsetY}px)`,
            }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
