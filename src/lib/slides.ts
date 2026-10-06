import Capa from "@/components/slides/decks/01-capa";
import Historia from "@/components/slides/decks/01b-historia";
import Sistema from "@/components/slides/decks/02-sistema";
import Metodo from "@/components/slides/decks/03-metodo";
import Escopo from "@/components/slides/decks/04-escopo";
import Ia from "@/components/slides/decks/05-ia";
import Rastreamento from "@/components/slides/decks/06-rastreamento";
import Encerramento from "@/components/slides/decks/07-encerramento";

/**
 * `presenter`: quem apresenta o slide (Jardel, Pedro, Avelino, Júlio ou Luis); vazio = a definir.
 * `notes`: o que mencionar para a turma. Ambos aparecem no rodapé fora da tela cheia.
 */
export const slides = [
  {
    title: "Capa",
    Component: Capa,
    presenter: "Jardel",
    notes:
      "Apresentar o squad Amigos do Nielsen e o tema: avaliação de IHC do Pinterest com apoio de IA. Avisar que esta é a Entrega 1, o planejamento.",
  },
  {
    title: "A história do Pinterest",
    Component: Historia,
    presenter: "",
    notes:
      "Nasceu do Tote, app de compras de 2009. Virou Pinterest em março de 2010 e chegou a 10 mil usuários em 9 meses. Hoje é empresa aberta (NYSE: PINS) com mais de 500 milhões de usuários por mês. Citar os fundadores: Ben Silbermann, Paul Sciarra e Evan Sharp.",
  },
  {
    title: "Sistema avaliado",
    Component: Sistema,
    presenter: "Jardel",
    notes:
      "Explicar pin, pasta e feed. Por que o Pinterest: 13 de 30 reviews negativos (43%) relatam problema de interface, 2º lugar entre 100 apps. As heurísticas mais citadas nos reviews (H4, H8, H3) viram nossas hipóteses.",
  },
  {
    title: "Método de avaliação",
    Component: Metodo,
    presenter: "",
    notes:
      "Avaliação heurística: inspeção por especialistas com as 10 heurísticas de Nielsen, sem usuários. Por quê: 5 integrantes viram 5 avaliadores independentes, é barata e complementa o teste com usuários do projeto de UX. Hoje entregamos a Preparação; coleta a relato ficam para a Entrega 2.",
  },
  {
    title: "Escopo da inspeção",
    Component: Escopo,
    presenter: "",
    notes:
      "Quatro áreas: feed, detalhe do pin, pastas e busca. Cada uma está ligada a uma reclamação real, menos pastas, que entra por ser o núcleo da curadoria. O foco de heurísticas é hipótese, não limite. Severidade de 0 a 4. Fora do escopo: login, criação de pins, mensagens e configurações.",
  },
  {
    title: "O apoio da IA no planejamento",
    Component: Ia,
    presenter: "",
    notes:
      "A IA rascunha, o squad decide: P1 escopo, P2 checklist, P3 ficha de registro e severidade. Limites que vigiamos: não vê o app atual, gera itens genéricos, pode inventar recursos e não define severidade. Contar um exemplo real do que aconteceu.",
  },
  {
    title: "Tabela de rastreamento",
    Component: Rastreamento,
    presenter: "",
    notes:
      "Tabela obrigatória: etapa, prompt e ferramenta, resumo da resposta, decisão e iterações. O P0 registra o uso do Claude Code para montar estes slides. A tabela cresce ao longo do trabalho e vira o apêndice do artigo.",
  },
  {
    title: "Encerramento",
    Component: Encerramento,
    presenter: "",
    notes: "Agradecer e abrir para perguntas.",
  },
];
