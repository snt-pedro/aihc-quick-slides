import { SlideLayout, type SlideProps } from "../SlideLayout";

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Tamanho do título; null = padrão dos slides (140). */
  titleSize: null as number | null,
  /** Deslocamento vertical do bloco: negativo = sobe, positivo = desce. */
  offsetY: 0,
  /**
   * Onde o "!" troca de preto para vermelho, em % da altura da caixa do texto (de cima para baixo).
   * Deve cair no vão entre a haste e o pingo, que na Inter 800 fica entre 61% e 66%.
   */
  dotSplit: 63.5,
};

export default function Encerramento({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} bare>
      <div
        className="flex flex-1 flex-col items-center justify-center text-center"
        style={{ marginTop: LAYOUT.offsetY }}
      >
        <h1
          className="slide-display slide-title-lg"
          style={{ fontWeight: 800, fontSize: LAYOUT.titleSize ?? undefined }}
        >
          Obrigado
          {/* "!" da própria fonte: haste preta e pingo vermelho via gradiente recortado no texto */}
          <span
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--slide-fg) ${LAYOUT.dotSplit}%, var(--slide-red) ${LAYOUT.dotSplit}%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            !
          </span>
        </h1>
      </div>
    </SlideLayout>
  );
}
