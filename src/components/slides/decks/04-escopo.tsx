import { SlideLayout, SlideTitle, type SlideProps } from "../SlideLayout";

// Trechos literais dos 30 reviews do Pinterest na desk research de UX (analise_ux/problemas_ux_top100.xlsx).
const areas = [
  {
    n: "1",
    name: "Feed principal",
    what: "Rolagem da página inicial, mistura de pins e anúncios, ações rápidas sobre o pin",
    evidence: [
      "“no meu feed chega a aparecer 6 anúncios seguidos”",
      "“qualquer coisa legal que você veja, é um anúncio que te leva pra shoppee”",
    ],
    focus: ["H8", "H4"],
  },
  {
    n: "2",
    name: "Detalhe do pin",
    what: "Abrir um pin, salvar, baixar, compartilhar, visitar o link, ver ideias relacionadas",
    evidence: [
      "“meter o baixar […] no compartilhar agora nem dá pra baixar”",
      "“fica toda hora mostrando o geminai”",
    ],
    focus: ["H6", "H3"],
  },
  {
    n: "3",
    name: "Pastas (boards)",
    what: "Criar pasta, salvar em pasta, mover e organizar pins, seções e pastas secretas",
    evidence: ["“não consigo mudar os nomes das pastas, aparece sempre que deu erro”"],
    focus: ["H9", "H5"],
  },
  {
    n: "4",
    name: "Busca",
    what: "Campo de busca, sugestões, filtros e busca por imagem",
    evidence: [
      "“não tem motivo pra mudar a pesquisa pra baixo”",
      "“propagandas que ocupam quase toda pesquisa”",
    ],
    focus: ["H4", "H8"],
  },
];

const severity = ["0 Não é problema", "1 Cosmético", "2 Pequeno", "3 Grande", "4 Catastrófico"];

export default function Escopo({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Escopo da inspeção">
      <div className="flex flex-1 flex-col" style={{ gap: 36 }}>
        <SlideTitle>Quatro áreas-alvo</SlideTitle>

        <div className="grid grid-cols-4" style={{ gap: 24, flex: 1 }}>
          {areas.map((a) => (
            <div key={a.name} className="slide-pin flex flex-col" style={{ padding: "36px 36px 32px", gap: 18 }}>
              <span
                className="slide-display slide-num"
                style={{ fontSize: 56, fontWeight: 800, lineHeight: 1, color: "var(--slide-red)" }}
              >
                {a.n}
              </span>
              <span className="slide-subtitle" style={{ fontWeight: 700, fontSize: 40 }}>
                {a.name}
              </span>
              <span className="slide-caption" style={{ color: "#444" }}>
                {a.what}
              </span>
              <div className="flex flex-col" style={{ gap: 10, marginTop: "auto" }}>
                {a.evidence.map((q) => (
                  <span key={q} className="slide-caption" style={{ fontStyle: "italic", fontSize: 21, color: "var(--slide-fg)" }}>
                    {q}
                  </span>
                ))}
              </div>
              <div className="flex" style={{ gap: 8 }}>
                <span className="slide-kicker" style={{ color: "var(--slide-muted)", fontSize: 18, alignSelf: "center" }}>
                  Foco
                </span>
                {a.focus.map((h) => (
                  <span key={h} className="slide-chip" style={{ background: "#fff", fontSize: 20, padding: "10px 18px" }}>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col" style={{ gap: 14 }}>
          <div className="flex items-center" style={{ gap: 10 }}>
            <span className="slide-kicker" style={{ color: "var(--slide-muted)", marginRight: 14, fontSize: 18 }}>
              Severidade
            </span>
            {severity.map((s, i) => (
              <span
                key={s}
                className={i === 4 ? "slide-chip slide-chip-red" : "slide-chip"}
                style={{ fontSize: 20, padding: "10px 18px" }}
              >
                {s}
              </span>
            ))}
          </div>
          <span className="slide-caption" style={{ color: "var(--slide-muted)", fontSize: 22 }}>
            Fora do escopo: cadastro, login e verificação de idade; criação de pins; mensagens;
            configurações (inclui o filtro de imagens de IA). Foco é a heurística provável, não um
            limite: qualquer violação encontrada é registrada.
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
