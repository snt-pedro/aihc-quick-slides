import { useCallback, useEffect, useState, type CSSProperties } from "react";

// Ajustes do cronômetro.
const TIMER = {
  /** Duração da apresentação, em minutos. */
  durationMin: 10,
  /**
   * Tempo extra depois de zerar, em minutos: o cronômetro conta negativo (-00:01, -00:02…)
   * com o fogo aceso. Ao fim dele, fica parado no limite piscando. 0 = sem tempo extra.
   */
  overtimeMin: 2,
  /** Segundos finais do tempo normal em que o número fica amarelo. */
  warningSec: 60,
};

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

  // Tempo normal
  if (remaining > 0) {
    const warning = remaining <= TIMER.warningSec * 1000;
    return (
      <button
        onClick={reset}
        title={title}
        className={className}
        style={{ color: warning ? "var(--slide-amber)" : undefined }}
      >
        {formatSeconds(Math.ceil(remaining / 1000))}
      </button>
    );
  }

  const over = -remaining;

  // Tempo extra: contagem negativa queimando; a chama cresce até o limite
  if (over < OVERTIME_MS) {
    const heat = over / OVERTIME_MS;
    return (
      <button
        onClick={reset}
        title={`${title} · tempo extra até -${formatSeconds(TIMER.overtimeMin * 60)}`}
        className={`${className ?? ""} timer-fire`}
        style={{ "--heat": heat } as CSSProperties}
      >
        <span className="timer-flame" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <span className="timer-fire-text">-{formatSeconds(Math.floor(over / 1000))}</span>
      </button>
    );
  }

  // Limite estourado: parado no máximo, piscando
  return (
    <button onClick={reset} title={title} className={`${className ?? ""} timer-over`}>
      -{formatSeconds(TIMER.overtimeMin * 60)}
    </button>
  );
}
