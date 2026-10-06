import { SlideLayout, Todo, type SlideProps } from "../SlideLayout";

// Preencher nome completo e matrícula de cada integrante.
const team: { name: string; id?: string }[] = [
  { name: "Francisco Jardel Silva Magalhães" },
  { name: "Integrante 2" },
  { name: "Integrante 3" },
  { name: "Integrante 4" },
  { name: "Integrante 5" },
];

export default function Capa({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} bare>
      <div className="flex flex-1 items-stretch justify-between" style={{ gap: 80 }}>
        <div className="flex flex-1 flex-col justify-between" style={{ paddingTop: 20 }}>
          <div className="flex flex-col" style={{ gap: 36 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Estudo de caso · Avaliação de IHC com apoio de IA
            </span>
            <h1
              className="slide-display slide-title-lg"
              style={{ fontWeight: 800, fontSize: 116, lineHeight: 1.02, whiteSpace: "nowrap" }}
            >
              Avaliação heurística
              <br />
              do <span style={{ color: "var(--slide-red)" }}>Pinterest</span>
            </h1>
            <span className="slide-subtitle" style={{ color: "#444", fontWeight: 500 }}>
              Entrega 1 · Planejamento
            </span>
          </div>

          <div className="flex flex-col" style={{ gap: 18 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Squad
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
          <img src="/pinterest.png" alt="Pinterest" style={{ maxWidth: 560, maxHeight: 560, objectFit: "contain" }} />
        </div>
      </div>
    </SlideLayout>
  );
}
