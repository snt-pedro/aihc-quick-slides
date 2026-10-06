# Avaliação heurística do Pinterest · AIHC

Slides da **Entrega 1 (planejamento)** do trabalho "Estudo de caso: avaliação de IHC com apoio de IA".
A avaliação heurística também entra na etapa Descobrir do projeto de UX (`../../UX/redesign-pinterest`),
de onde vêm a base visual e os dados da desk research.

## Rodar

```bash
bun install
bun run dev
```

Abra `http://localhost:8080/slides/1` (a porta pode variar). Atalhos: ← → navegar · F tela cheia · P exportar PDF · R reiniciar o cronômetro.

## Slides

| # | Slide | Arquivo | Responsável |
|---|---|---|---|
| 1 | Capa e equipe | `src/components/slides/decks/01-capa.tsx` | Francisco Jardel Silva Magalhães |
| 2 | A história do Pinterest | `01b-historia.tsx` | _definir_ |
| 3 | Sistema avaliado | `02-sistema.tsx` | Francisco Jardel Silva Magalhães |
| 4 | Método de avaliação | `03-metodo.tsx` | _definir_ |
| 5 | Escopo da inspeção | `04-escopo.tsx` | _definir_ |
| 6 | O apoio da IA no planejamento | `05-ia.tsx` | _definir_ |
| 7 | Tabela de rastreamento | `06-rastreamento.tsx` | _definir_ |
| 8 | Obrigado | `07-encerramento.tsx` | — |

Trechos em amarelo nos slides (componente `Todo`) são pendências do squad.

## Registro do uso de IA

- `src/lib/rastreamento.ts`: dados da tabela do slide 6 (e, no fim, do apêndice do artigo). Campos `null` aparecem como pendentes.
- `prompts/`: texto integral de cada prompt, iterações, resumo da resposta e decisão do squad.

Fluxo: rodar o prompt → colar a resposta integral ao lado do `.md` → registrar iterações e decisão → atualizar `rastreamento.ts`.
O P0 registra o uso do Claude Code para montar este deck.
