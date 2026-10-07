import { useCallback, useEffect, useState, type CSSProperties } from "react";

// Ajustes do cronômetro.
const TIMER = {
  /** Duração da apresentação, em minutos. */
  durationMin: 10,
  /**
   * Tempo extra depois de zerar, em minutos: o cronômetro conta negativo (-00:01, -00:02…)
   * com o fogo aceso. Ao fim dele, fica parado no limite piscando. 0 = sem tempo extra.
   */
  overtimeMin: 1,
  /** Segundos finais do tempo normal em que o número fica amarelo. */
  warningSec: 60,
  /**
   * true = desliga o tremular do fogo e o piscar quando o sistema pede menos movimento
   * (no Windows: Acessibilidade › Efeitos visuais › Efeitos de animação desligado).
   * false = anima sempre.
   */
  respectReducedMotion: false,
};

const motionClass = TIMER.respectReducedMotion ? " timer-respect-motion" : "";

const TIMER_KEY = "slide-timer-deadline";
const DURATION_MS = TIMER.durationMin * 60 * 1000;
const OVERTIME_MS = TIMER.overtimeMin * 60 * 1000;

// Um recarregamento real da página (F5) deve reiniciar o cronômetro, enquanto a
// navegação entre slides (roteamento SPA) deve preservá-lo. A navegação SPA não
// dispara este módulo novamente, então basta limpar o prazo guardado quando o
// documento foi de fato recarregado.
if (typeof window !== "undefined") {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav?.type === "reload") sessionStorage.removeItem(TIMER_KEY);
}

function getDeadline(): number {
  const stored = sessionStorage.getItem(TIMER_KEY);
  if (stored) {
    const n = parseInt(stored, 10);
    if (!Number.isNaN(n)) return n;
  }
  const deadline = Date.now() + DURATION_MS;
  sessionStorage.setItem(TIMER_KEY, String(deadline));
  return deadline;
}

function formatSeconds(totalSeconds: number): string {
  const mm = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const ss = String(totalSeconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

/**
 * Contagem regressiva com tempo extra. O prazo é guardado em sessionStorage
 * como timestamp absoluto, então o cronômetro continua correto ao trocar de
 * slide (mesmo com a remontagem do componente).
 */
export function CountdownTimer({ className }: { className?: string }) {
  // Começa com a duração cheia também no cliente para bater com o HTML do servidor;
  // o valor real entra no primeiro tick.
  const [remaining, setRemaining] = useState(DURATION_MS);

  useEffect(() => {
    const tick = () => setRemaining(getDeadline() - Date.now());
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, []);

  const reset = useCallback(() => {
    const deadline = Date.now() + DURATION_MS;
    sessionStorage.setItem(TIMER_KEY, String(deadline));
    setRemaining(deadline - Date.now());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignora Ctrl+R / Cmd+R para não interferir no recarregar da página
      if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey && !e.altKey) reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reset]);

  const title = `Aperte R para reiniciar (${formatSeconds(TIMER.durationMin * 60)})`;

  // A caixa do botão é sempre só o "mm:ss"; o "-" e a chama ficam por fora (posição absoluta),
  // então o cronômetro e o número da página não se mexem ao trocar de fase.
  const over = -remaining;
  const phase = remaining > 0 ? "normal" : over < OVERTIME_MS ? "fire" : "over";

  const digits =
    phase === "normal"
      ? formatSeconds(Math.ceil(remaining / 1000))
      : phase === "fire"
        ? formatSeconds(Math.floor(over / 1000))
        : formatSeconds(TIMER.overtimeMin * 60);

  const phaseClass = phase === "fire" ? " timer-fire" : phase === "over" ? " timer-over" : "";
  const warning = phase === "normal" && remaining <= TIMER.warningSec * 1000;

  return (
    <button
      onClick={reset}
      title={
        phase === "fire"
          ? `${title} · tempo extra até -${formatSeconds(TIMER.overtimeMin * 60)}`
          : title
      }
      className={`${className ?? ""} timer${phaseClass}${phase === "normal" ? "" : motionClass}`}
      style={
        {
          color: warning ? "var(--slide-amber)" : undefined,
          "--heat": phase === "fire" ? over / OVERTIME_MS : undefined,
          // fica parado enquanto o slide troca (ver transição em styles.css)
          viewTransitionName: "slide-timer",
        } as CSSProperties
      }
    >
      {phase !== "normal" && (
        <span className="timer-sign" aria-hidden>
          -
        </span>
      )}
      <span className="timer-digits">{digits}</span>
      {/* chama: tempo extra queimando, cresce até o limite */}
      {phase === "fire" && (
        <span className="timer-flame" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      )}
    </button>
  );
}
