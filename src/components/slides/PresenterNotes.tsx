import { useEffect, useState } from "react";

/** Rodapé com apresentador e roteiro do slide; some em tela cheia e na impressão. */
export function PresenterNotes({ presenter, notes }: { presenter: string; notes: string }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const check = () => setIsFullscreen(!!document.fullscreenElement);
    check();
    document.addEventListener("fullscreenchange", check);
    return () => document.removeEventListener("fullscreenchange", check);
  }, []);

  if (isFullscreen) return null;

  return (
    <div
      className="flex shrink-0 items-start gap-4 px-6 py-3 text-sm leading-relaxed"
      style={{ background: "#f6f6f6", borderTop: "1px solid #e6e6e6", color: "#333" }}
    >
      <span
        className="shrink-0 rounded-full px-3 py-1 font-semibold"
        style={
          presenter
            ? { background: "var(--slide-red)", color: "#fff" }
            : { background: "#fff4d6", color: "var(--slide-amber)" }
        }
      >
        {presenter || "Apresentador a definir"}
      </span>
      <p className="m-0 pt-0.5">{notes}</p>
    </div>
  );
}
