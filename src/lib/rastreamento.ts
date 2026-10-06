/**
 * Tabela de rastreamento do uso de IA (vira o apêndice do artigo).
 * Texto completo de cada prompt em /prompts. Atualize `resposta`, `decisao`
 * e `iteracoes` depois de rodar cada prompt; `null` aparece como pendente no slide.
 */
export type Decisao = "Aceito" | "Editado" | "Descartado";

export type Registro = {
  id: string;
  etapa: string;
  /** Ferramenta e modelo usados (ex.: "ChatGPT (GPT-5)"). */
  ferramenta: string | null;
  prompt: string;
  resposta: string | null;
  decisao: Decisao | null;
  /** Motivo da decisão do squad, em uma frase. */
  porque?: string;
  iteracoes: number | null;
};

export const registros: Registro[] = [
  {
    id: "P0",
    etapa: "Apresentação",
    ferramenta: "Claude Code (Opus 5.5)",
    prompt: "Montar os slides da Entrega 1 a partir do deck de UX e do enunciado",
    resposta:
      "Deck de 7 slides; recorte das 4 áreas ligado a citações da desk research; rascunho dos prompts P1–P3",
    decisao: null,
    iteracoes: 1,
  },
  {
    id: "P1",
    etapa: "Escopo",
    ferramenta: null,
    prompt: "Propor e justificar áreas-alvo do app a partir dos achados da desk research",
    resposta: null,
    decisao: null,
    iteracoes: null,
  },
  {
    id: "P2",
    etapa: "Checklist",
    ferramenta: null,
    prompt: "Gerar itens de verificação por heurística × área, marcando o que não tem certeza",
    resposta: null,
    decisao: null,
    iteracoes: null,
  },
  {
    id: "P3",
    etapa: "Protocolo",
    ferramenta: null,
    prompt: "Montar a ficha de registro de problemas e o guia da escala de severidade",
    resposta: null,
    decisao: null,
    iteracoes: null,
  },
];
