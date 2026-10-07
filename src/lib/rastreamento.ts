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
  iteracoes: string | null;
};

export const registros: Registro[] = [
  {
    id: "D0",
    etapa: "Desk research",
    ferramenta: "Claude Code (Opus 5.5)",
    prompt:
      "Classificar os 30 reviews 1–2★ por categoria de UX e heurística",
    resposta:
      "13 ocorrências em 13 reviews; 5 categorias distintas (anúncios e dark patterns, mudança indesejada de interface, navegação e arquitetura da informação, ...)",
    decisao: "Editado",
    porque: "Erro ao renomear pastas entrou como evidência",
    iteracoes: "~30",
  },
  {
    id: "P0",
    etapa: "Escopo",
    ferramenta: "Claude Code (Opus 5.5)",
    prompt: "Propor e justificar áreas-alvo do app a partir dos achados da desk research",
    resposta: "Sugestão de 4 áreas-alvo: feed principal, detalhe do pin, busca e gerenciamento de pastas",
    decisao: null,
    iteracoes: "1",
  },
  {
    id: "P1",
    etapa: "Apresentação",
    ferramenta: "Claude Code (Opus 5.5)",
    prompt: "Montar este slide a partir do deck de UX, da descrição do projeto e de nossas escolhas",
    resposta:
      "Slide de 8 páginas; cronômetro; exportação PDF; rodapé com divisão de apresentadores; resumo das páginas",
    decisao: null,
    iteracoes: "~15",
  },
];
