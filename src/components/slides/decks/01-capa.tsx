import { SlideLayout, Todo, type SlideProps } from "../SlideLayout";

// Preencher nome completo e matrícula de cada integrante.
const team: { name: string; id?: string }[] = [
  { name: "Jardel, Pedro, Avelino, Júlio e Luis", id: "" },
];

// Deslocamento horizontal da logo em px do slide: negativo = esquerda, positivo = direita.
const LOGO_OFFSET_X = -200;

export default function Capa({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} bare>
      <div className="flex flex-1 items-stretch justify-between" style={{ gap: 80 }}>
        <div className="flex flex-1 flex-col justify-between" style={{ paddingTop: 20 }}>
          <div className="flex flex-col" style={{ gap: 36 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Avaliação de IHC com apoio de IA
            </span>
            <h1
              className="slide-display slide-title-lg"
              style={{ fontWeight: 800, fontSize: 116, lineHeight: 1.02, whiteSpace: "nowrap" }}
            >
              Avaliação de IHC:
              <br />
              <span style={{ color: "var(--slide-red)" }}>Pinterest</span>
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

        <div className="flex items-center justify-center" style={{ flex: 0.45 }}>
          <img src="/pinterest.png" alt="Pinterest" style={{
              maxWidth: 1260,
              maxHeight: 1260,
              objectFit: "contain",
              transform: `translateX(${LOGO_OFFSET_X}px)`,
            }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
