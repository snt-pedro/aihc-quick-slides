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
    what: "Checklist",
    ai: "Gera itens de verificação por heurística × área",
    human: "Squad corta o genérico e testa cada item no app",
  },
  {
    id: "P3",
    what: "Protocolo",
    ai: "Rascunha a ficha de registro e o guia de severidade",
    human: "Squad calibra a escala com um exemplo real",
  },
];

const limits = [
  {
    t: "Não vê o app",
    d: "Conhece versões antigas; o Pinterest muda a interface com frequência",
  },
  {
    t: "Checklist genérico",
    d: "Itens que valem para qualquer app não ajudam a inspeção",
  },
  {
    t: "Inventa recursos",
    d: "Pode citar telas ou botões que não existem: tudo é conferido no app",
  },
  {
    t: "Severidade é humana",
    d: "A IA não classifica problemas nem tira conclusões por nós",
  },
];

export default function Ia({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="O apoio da IA no planejamento">
      <div className="flex flex-1 flex-col" style={{ gap: 40 }}>
        <SlideTitle>
          A IA <span style={{ color: "var(--slide-red)" }}>rascunha</span>, o squad decide
        </SlideTitle>

        <div className="flex flex-1" style={{ gap: 56 }}>
          {/* onde entra */}
          <div className="flex flex-col" style={{ flex: 1.15, gap: 18 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Onde a IA entrou
            </span>
            {uses.map((u) => (
              <div
                key={u.id}
                className="slide-pin grid items-center"
                style={{ gridTemplateColumns: "96px 1fr", padding: "26px 32px", gap: 24 }}
              >
                <span className="slide-chip slide-chip-red" style={{ textAlign: "center", padding: "14px 0" }}>
                  {u.id}
                </span>
                <div className="flex flex-col" style={{ gap: 6 }}>
                  <span className="slide-body" style={{ fontWeight: 700 }}>
                    {u.what}: <span style={{ fontWeight: 500 }}>{u.ai}</span>
                  </span>
                  <span className="slide-caption" style={{ color: "#444" }}>
                    → {u.human}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* limites */}
          <div className="flex flex-col" style={{ flex: 1, gap: 18 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)" }}>
              Limites que vigiamos
            </span>
            <div className="grid grid-cols-2" style={{ gap: 16 }}>
              {limits.map((l) => (
                <div key={l.t} className="slide-pin-outline flex flex-col" style={{ padding: "24px 28px", gap: 6 }}>
                  <span className="slide-body" style={{ fontWeight: 700 }}>
                    {l.t}
                  </span>
                  <span className="slide-caption" style={{ color: "#444", fontSize: 22 }}>
                    {l.d}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col" style={{ gap: 6, marginTop: 8 }}>
              <span className="slide-kicker" style={{ color: "var(--slide-red)" }}>
                Na prática · desk research
              </span>
              <span className="slide-caption" style={{ fontSize: 22 }}>
                Um review relatava 3 problemas: anúncios na busca, filtro de IA que não funciona e{" "}
                <b>erro ao renomear pastas</b>. A classificação registrou só os anúncios; uma releitura
                dos comentários completos achou o erro e levou Pastas para o escopo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
