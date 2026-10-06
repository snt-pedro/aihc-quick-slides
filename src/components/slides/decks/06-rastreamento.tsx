import { SlideLayout, SlideTitle, Todo, type SlideProps } from "../SlideLayout";
import { registros, type Decisao } from "@/lib/rastreamento";

const decisaoStyle: Record<Decisao, { background: string; color: string }> = {
  Aceito: { background: "#111", color: "#fff" },
  Editado: { background: "var(--slide-red-soft)", color: "var(--slide-red)" },
  Descartado: { background: "var(--slide-soft)", color: "var(--slide-muted)" },
};

const cell = { fontSize: 24, padding: "20px 22px" } as const;

export default function Rastreamento({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} kicker="Tabela de rastreamento">
      <div className="flex flex-1 flex-col" style={{ gap: 36 }}>
        <SlideTitle>Log de prompts</SlideTitle>

        <table className="slide-table" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: 80 }} />
            <col style={{ width: 210 }} />
            <col style={{ width: 520 }} />
            <col />
            <col style={{ width: 200 }} />
            <col style={{ width: 130 }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ padding: "0 22px 16px" }}>#</th>
              <th style={{ padding: "0 22px 16px" }}>Etapa</th>
              <th style={{ padding: "0 22px 16px" }}>Prompt / ferramenta</th>
              <th style={{ padding: "0 22px 16px" }}>Resposta da IA (resumo)</th>
              <th style={{ padding: "0 22px 16px" }}>Decisão</th>
              <th style={{ padding: "0 22px 16px" }}>Iterações</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((r) => (
              <tr key={r.id}>
                <td style={{ ...cell, fontWeight: 700, color: "var(--slide-red)" }}>{r.id}</td>
                <td style={{ ...cell, fontWeight: 600 }}>{r.etapa}</td>
                <td style={cell}>
                  <div className="flex flex-col" style={{ gap: 6 }}>
                    <span>{r.prompt}</span>
                    <span style={{ fontSize: 20, color: "var(--slide-muted)" }}>
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
                        style={{ ...decisaoStyle[r.decisao], fontSize: 20, padding: "10px 18px", alignSelf: "flex-start" }}
                      >
                        {r.decisao}
                      </span>
                      {r.porque && <span style={{ fontSize: 18, color: "#444" }}>{r.porque}</span>}
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

        <span className="slide-caption" style={{ color: "var(--slide-muted)", marginTop: "auto", fontSize: 22 }}>
          Texto integral dos prompts e respostas no repositório (pasta prompts/); a tabela segue
          crescendo nas próximas etapas e vira o apêndice do artigo.
        </span>
      </div>
    </SlideLayout>
  );
}
