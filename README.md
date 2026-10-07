# Avaliação heurística do Pinterest · AIHC

Slides da **Entrega 1 (planejamento)** do trabalho "Estudo de caso: avaliação de IHC com apoio de IA",
feitos pelo squad **Amigos do Nielsen** (UFC Quixadá).

A apresentação é uma aplicação web (React + TanStack Start + Tailwind) que renderiza slides de
1920×1080, com navegação por teclado, roteiro do apresentador e exportação para PDF. A base visual e
os dados da desk research vêm do projeto de redesign do Pinterest da disciplina de UX.

## Executar localmente

### Pré-requisitos

- [Bun](https://bun.sh) 1.x (recomendado, o repositório tem `bun.lock`) **ou** Node.js 22+ com npm
- Git

### Passo a passo

```bash
git clone https://github.com/snt-pedro/aihc-quick-slides.git
cd aihc-quick-slides
bun install
bun run dev
```

Com npm, troque os dois últimos comandos por `npm install` e `npm run dev`.

Abra o endereço que aparece no terminal (normalmente `http://localhost:8080`) e vá para `/slides/1`.

### Atalhos na apresentação

| Tecla | Ação |
|---|---|
| ← → (ou Espaço, PageUp/PageDown) | Slide anterior / próximo |
| Home / End | Primeiro / último slide |
| F | Tela cheia (esconde o roteiro do apresentador) |
| P | Exportar todos os slides para PDF (abre a janela de impressão: escolha "Salvar como PDF") |
| R | Reiniciar o cronômetro |

Fora da tela cheia, o rodapé mostra quem apresenta o slide e o que falar. Ele não aparece no PDF.

### Outros comandos

| Comando | O que faz |
|---|---|
| `bun run build` | Gera a versão de produção |
| `bun run preview` | Serve a versão gerada pelo `build` |
| `bun run lint` | Roda o ESLint |
| `bun run format` | Formata o código com o Prettier |
| `bunx tsc --noEmit` | Checa os tipos |

## Estrutura

```
src/
  components/slides/
    decks/            um arquivo por slide (01-capa.tsx, 02-sistema.tsx, ...)
    SlideLayout.tsx   cabeçalho, rodapé, SlideTitle e o marcador Todo
    PresenterNotes.tsx  rodapé do apresentador
  lib/
    slides.ts         ordem dos slides, apresentador e roteiro de cada um
    rastreamento.ts   tabela de rastreamento do uso de IA (slide "Log de prompts")
  routes/             páginas (/slides/$index)
  styles.css          tema dos slides (cores, tamanhos de fonte, tabelas)
prompts/              texto integral dos prompts usados com IA e registro das iterações
public/               imagens (logo, fotos dos fundadores)
```

## Como editar

- **Texto ou dados de um slide:** edite o arquivo em `src/components/slides/decks/`. Os dados ficam em
  arrays no topo do arquivo, separados do JSX.
- **Layout de um slide:** cada arquivo começa com um objeto `LAYOUT` comentado (tamanhos, alturas,
  espaçamentos, deslocamentos em px do slide 1920×1080). Ajuste ali antes de mexer no JSX.
- **Apresentador e roteiro:** campos `presenter` e `notes` em `src/lib/slides.ts`. `presenter` vazio
  aparece como "Apresentador a definir".
- **Novo slide:** crie o arquivo em `decks/` usando `SlideLayout` (veja os existentes) e registre-o
  em `src/lib/slides.ts` na posição desejada.
- **Pendências:** envolva o texto em `<Todo>…</Todo>`; ele aparece destacado em amarelo no slide.

O servidor de desenvolvimento recarrega o slide sozinho a cada arquivo salvo.

## Registro do uso de IA

O trabalho exige documentar **todo** uso de IA, inclusive erros dela. Por isso:

- `src/lib/rastreamento.ts` guarda cada uso (etapa, prompt e ferramenta, resumo da resposta,
  decisão do squad e número de iterações). Campos `null` aparecem como pendentes no slide. Essa
  tabela vira o apêndice do artigo.
- `prompts/` guarda o texto integral de cada prompt, as iterações e a resposta completa.

Fluxo: rodar o prompt → salvar a resposta integral em `prompts/` → registrar iterações e decisão no
`.md` → atualizar `rastreamento.ts`.

Nunca preencha a tabela com respostas ou decisões que não aconteceram: a honestidade do registro é
critério de avaliação.

## Contribuir

1. Crie uma branch a partir da `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b slide-escopo-ajustes
   ```
2. Faça as alterações e confira no navegador (`bun run dev`) que o slide não estoura a área de
   1920×1080 nem encosta no rodapé.
3. Rode `bun run lint` e `bunx tsc --noEmit` antes de enviar.
4. Faça commits pequenos, com mensagem em português no imperativo
   (ex.: "Ajusta altura dos cartões do escopo").
5. Envie a branch e abra um pull request para a `main`:
   ```bash
   git push -u origin slide-escopo-ajustes
   ```
   Na descrição do PR, diga quais slides mudaram e, se possível, anexe um print.
6. Se a mudança envolveu IA (gerar texto, revisar, classificar), registre o uso em
   `src/lib/rastreamento.ts` no mesmo PR.

### Convenções

- Conteúdo dos slides e mensagens de commit em português.
- Cores e tamanhos de fonte vêm das variáveis `--slide-*` e das classes `slide-*` de `styles.css`;
  evite cores soltas.
- Citações de usuários são trechos literais dos reviews da desk research; não edite o texto delas.

### Problemas conhecidos

- O cronômetro do cabeçalho gera um aviso de *hydration mismatch* no console ao carregar a página.
  É inofensivo: o slide renderiza normalmente.
- `bunx tsc --noEmit` acusa um erro de tipo em `src/routes/__root.tsx` (`errorComponent`), herdado
  da base do projeto. Não afeta a execução.
- `bun run lint` mostra 6 avisos (*warnings*) de `react-refresh` em `src/components/ui/`. São
  esperados; o que não pode haver são erros. Se aparecer erro de formatação, rode `bun run format`.

## Slides e responsáveis

| # | Slide | Arquivo | Responsável |
|---|---|---|---|
| 1 | Capa e equipe | `01-capa.tsx` | Francisco Jardel Silva Magalhães |
| 2 | A história do Pinterest | `01b-historia.tsx` | _definir_ |
| 3 | Sistema avaliado | `02-sistema.tsx` | Francisco Jardel Silva Magalhães |
| 4 | Método de avaliação | `03-metodo.tsx` | _definir_ |
| 5 | Escopo da inspeção | `04-escopo.tsx` | _definir_ |
| 6 | O apoio da IA no planejamento | `05-ia.tsx` | _definir_ |
| 7 | Tabela de rastreamento | `06-rastreamento.tsx` | _definir_ |
| 8 | Obrigado | `07-encerramento.tsx` | — |
