import { SlideLayout, type SlideProps } from "../SlideLayout";

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Espaço vertical entre o ponto, o "Obrigado!" e o "Dúvidas?". */
  gap: 40,
  /** Tamanho do título; null = padrão dos slides (140). */
  titleSize: null as number | null,
  /** Deslocamento vertical do bloco: negativo = sobe, positivo = desce. */
  offsetY: 0,
};

export default function Encerramento({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} bare>
      <div
        className="flex flex-1 flex-col items-center justify-center text-center"
        style={{ gap: LAYOUT.gap, marginTop: LAYOUT.offsetY }}
      >
        <span
          style={{ width: 28, height: 28, borderRadius: 999, background: "var(--slide-red)" }}
        />
        <h1
          className="slide-display slide-title-lg"
          style={{ fontWeight: 800, fontSize: LAYOUT.titleSize ?? undefined }}
        >
          Obrigado!
        </h1>
      </div>
    </SlideLayout>
  );
}
