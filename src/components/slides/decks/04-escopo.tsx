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

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Distância entre o título e os cartões: maior = cartões mais para baixo. */
  titleGap: 86,
  /** Altura dos cartões das áreas. */
  cardHeight: 560,
  /** Espaço horizontal entre os cartões. */
  cardsGap: 24,
  /** Espaço interno dos cartões (topo, laterais, base). */
  cardPadding: "36px 36px 32px",
  /** Espaço vertical entre os itens de cada cartão. */
  cardInnerGap: 18,
  /** Tamanho do número (1–4) e do nome da área. */
  numberSize: 56,
  nameSize: 40,
  /** Tamanho das citações dos reviews. */
  quoteSize: 21,
};

export default function Escopo({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Escopo da inspeção">
      <div className="flex flex-1 flex-col" style={{ gap: LAYOUT.titleGap }}>
        <SlideTitle>Quatro áreas-alvo</SlideTitle>

        <div className="grid grid-cols-4" style={{ gap: LAYOUT.cardsGap, height: LAYOUT.cardHeight }}>
          {areas.map((a) => (
            <div
              key={a.name}
              className="slide-pin flex flex-col"
              style={{ padding: LAYOUT.cardPadding, gap: LAYOUT.cardInnerGap }}
            >
              <span
                className="slide-display slide-num"
                style={{ fontSize: LAYOUT.numberSize, fontWeight: 800, lineHeight: 1, color: "var(--slide-red)" }}
              >
                {a.n}
              </span>
              <span className="slide-subtitle" style={{ fontWeight: 700, fontSize: LAYOUT.nameSize }}>
                {a.name}
              </span>
              <span className="slide-caption" style={{ color: "#444" }}>
                {a.what}
              </span>
              <div className="flex flex-col" style={{ gap: 10, marginTop: "auto" }}>
                {a.evidence.map((q) => (
                  <span key={q} className="slide-caption" style={{ fontStyle: "italic", fontSize: LAYOUT.quoteSize, color: "var(--slide-fg)" }}>
                    {q}
                  </span>
                ))}
              </div>
              <div className="flex" style={{ gap: 8 }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
