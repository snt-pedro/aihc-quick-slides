## Executar localmente

### Pré-requisitos
- Node.js 22+ com npm

### Passo a passo

```bash
git clone https://github.com/snt-pedro/aihc-quick-slides.git
cd aihc-quick-slides
npm install
npm run dev
```

Abra o endereço que aparece no terminal (`http://localhost:8080`).

### Atalhos na apresentação

| Tecla | Ação |
|---|---|
| ← → | Slide anterior / próximo |
| F | Tela cheia (esconde o roteiro do apresentador) |
| R | Reiniciar o cronômetro |
| P | Exportar todos os slides para PDF (abre a janela de impressão: escolha "Salvar como PDF") |

Fora da tela cheia, o rodapé mostra quem apresenta o slide e o que falar. Ele não aparece no PDF.

### Exportar PDF sem URL nem data nas páginas

Ao apertar **P**, abre a janela de impressão do navegador. No Chrome/Edge, abra **Mais definições** e:

- mais configurações -> desmarque **Cabeçalhos e rodapés** (senão a URL aparece no canto inferior esquerdo de cada slide)

O navegador lembra essa opção nas próximas exportações.

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

## Contribuir

Crie uma branch a partir da `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b slide-escopo-ajustes
   ```