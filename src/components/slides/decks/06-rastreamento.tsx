import { SlideLayout, SlideTitle, Todo, type SlideProps } from "../SlideLayout";
import { registros, type Decisao } from "@/lib/rastreamento";

const decisaoStyle: Record<Decisao, { background: string; color: string }> = {
  Aceito: { background: "#111", color: "#fff" },
  Editado: { background: "var(--slide-red-soft)", color: "var(--slide-red)" },
  Descartado: { background: "var(--slide-soft)", color: "var(--slide-muted)" },
};

const cell = { fontSize: 20, lineHeight: 1.3, padding: "12px 18px" } as const;

export default function Rastreamento({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Tabela de rastreamento">
      <div className="flex flex-1 flex-col" style={{ gap: 24 }}>
        <SlideTitle>Log de prompts</SlideTitle>

        <table className="slide-table" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: 80 }} />
            <col style={{ width: 210 }} />
            <col style={{ width: 480 }} />
            <col />
            <col style={{ width: 250 }} />
            <col style={{ width: 130 }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ padding: "0 18px 12px" }}>#</th>
              <th style={{ padding: "0 18px 12px" }}>Etapa</th>
              <th style={{ padding: "0 18px 12px" }}>Prompt / ferramenta</th>
              <th style={{ padding: "0 18px 12px" }}>Resposta da IA (resumo)</th>
              <th style={{ padding: "0 18px 12px" }}>Decisão</th>
              <th style={{ padding: "0 18px 12px" }}>Iterações</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((r) => (
              <tr key={r.id}>
                <td style={{ ...cell, fontWeight: 700, color: "var(--slide-red)" }}>{r.id}</td>
                <td style={{ ...cell, fontWeight: 600 }}>{r.etapa}</td>
                <td style={cell}>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    <span>{r.prompt}</span>
                    <span style={{ fontSize: 17, color: "var(--slide-muted)" }}>
                      {r.ferramenta ?? <Todo>ferramenta</Todo>}
                    </span>
                  </div>
                </td>
                <td style={{ ...cell, color: "#444" }}>{r.resposta ?? <Todo>após rodar</Todo>}</td>
                <td style={cell}>
                  {r.decisao ? (
                    <div className="flex flex-col" style={{ gap: 6 }}>
                      <span
                        className="slide-chip"
                        style={{ ...decisaoStyle[r.decisao], fontSize: 17, padding: "6px 14px", alignSelf: "flex-start" }}
                      >
                        {r.decisao}
                      </span>
                      {r.porque && <span style={{ fontSize: 16, color: "#444" }}>{r.porque}</span>}
                    </div>
                  ) : (
                    <Todo>squad</Todo>
                  )}
                </td>
                <td className="slide-num" style={cell}>
                  {r.iteracoes ?? <Todo>n</Todo>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideLayout>
  );
}
