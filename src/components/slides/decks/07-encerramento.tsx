import { SlideLayout, type SlideProps } from "../SlideLayout";

// Ajustes de layout (px do slide 1920×1080).
const LAYOUT = {
  /** Tamanho do título; null = padrão dos slides (140). */
  titleSize: null as number | null,
  /** Deslocamento vertical do bloco: negativo = sobe, positivo = desce. */
  offsetY: 0,
  /**
   * Diâmetro da logo que faz o pingo do "!", em fração do tamanho da fonte.
   * O pingo original da fonte tem 0.19; acima de ~0.25 o "P" da logo fica legível.
   * A logo cresce para cima a partir da linha de base e a haste encurta junto.
   */
  dotSize: 0.24,
  /** Vão entre a haste e a logo, em fração do tamanho da fonte. */
  dotGap: 0.04,
  /** Espaço extra antes do "!" para a logo não encostar no "o", em fração do tamanho da fonte. */
  bangMarginLeft: 0.06,
};

// Métricas da Inter 800, em fração do tamanho da fonte (medidas no navegador).
const FONT = {
  /** Topo da caixa do texto até a linha de base. */
  ascent: 0.971,
  /** Altura total da caixa do texto (ascendente + descendente). */
  box: 1.214,
  /** Centro horizontal da haste do "!" dentro da largura do caractere, em %. */
  bangCenterX: 56,
};

// Onde está o círculo dentro de public/pinterest.png (1920×1080, resto transparente).
const LOGO = { width: 1920, height: 1080, x: 440, y: 18, size: 1038 };

const dotTop = FONT.ascent - LAYOUT.dotSize; // a logo encosta na linha de base
const stemEnd = ((dotTop - LAYOUT.dotGap) / FONT.box) * 100;
const logoScale = LAYOUT.dotSize / LOGO.size;

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
          <span style={{ position: "relative", marginLeft: `${LAYOUT.bangMarginLeft}em` }}>
            {/* haste: o "!" da fonte, visível só até acima da logo */}
            <span
              style={{
                backgroundImage: `linear-gradient(to bottom, var(--slide-fg) ${stemEnd}%, transparent ${stemEnd}%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              !
            </span>
            {/* pingo: o círculo da logo, recortado do PNG */}
            <span
              role="img"
              aria-hidden
              style={{
                position: "absolute",
                left: `${FONT.bangCenterX}%`,
                top: `${dotTop}em`,
                width: `${LAYOUT.dotSize}em`,
                height: `${LAYOUT.dotSize}em`,
                transform: "translateX(-50%)",
                backgroundImage: "url(/pinterest.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: `${LOGO.width * logoScale}em ${LOGO.height * logoScale}em`,
                backgroundPosition: `${-LOGO.x * logoScale}em ${-LOGO.y * logoScale}em`,
              }}
            />
          </span>
        </h1>
      </div>
    </SlideLayout>
  );
}
