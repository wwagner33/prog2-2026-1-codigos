#import "@preview/polylux:0.4.0": toolbox
#import "@preview/unofficial-cambridge-polylux-theme:0.0.1": logo, slide
#import "@preview/mannot:0.3.1": *
#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node

#set page(
  paper: "presentation-16-9",
  footer: align(right, text(size: .8em, toolbox.slide-number)),
  margin: (bottom: 2em, rest: 1em),
)

// Logomarca da instituição
#logo.update(image("../assets/logo_ufc.png"))

// --- SLIDE DE TÍTULO ---
#slide(type: "title", [
  #set align(horizon)

  = Introdução a Algoritmos
  == Pesquisa Simples, Pesquisa Binária e Notação Big O
  
  #v(1.5em)
  *Universidade Federal do Ceará* \
  Bacharelado em Sistemas e Mídias Digitais \
  Disciplina: Programação II \
  Prof. Wellington Sarmento
])

// --- SLIDE 1: O QUE É E PESQUISA SIMPLES ---
#slide[
  = Pesquisa Simples (Busca Linear)

  Um algoritmo é um conjunto de instruções para cumprir uma tarefa. A tarefa mais comum é buscar um dado.

  Imagine procurar o nome de alguém em uma lista telefônica lendo cada página, desde a primeira. Isso é a Pesquisa Simples.

  - *Como funciona:* O algoritmo verifica cada elemento da lista, passo a passo, até encontrar o alvo.
  - *Custo:* Se a lista tem $n$ elementos, no pior dos casos, ele fará $n$ verificações (ex: o elemento é o último ou não existe).
  - *Tempo de execução:* Tempo linear, denotado na notação matemática como $O(n)$.

  #align(center)[
    #box(width: 70%, fill: luma(240), stroke: 1pt, inset: 10pt, radius: 4pt)[
      *[SUGESTÃO DE IMAGEM DO LIVRO]*
      Insira aqui a ilustração da pessoa checando caixa por caixa para encontrar uma chave.
    ]
  ]
]

// --- SLIDE 2: PESQUISA BINÁRIA ---
#slide(type: "light", [
  == Pesquisa Binária

  Imagine um jogo de adivinhação de 1 a 100. Se você chutar "50" e a pessoa disser "mais alto", você acabou de eliminar 50 números errados de uma só vez!

  - *A Regra de Ouro:* A pesquisa binária *só funciona se a lista estiver previamente ordenada*.
  - *Como funciona:* O algoritmo chuta sempre o elemento central. Se o alvo for menor, descarta-se a metade superior. Se for maior, descarta-se a metade inferior.
  - *Eficiência:* A cada iteração, o problema cai pela metade.
  - *Tempo de execução:* Tempo logarítmico, denotado como $O(log n)$.

  #align(center)[
    #box(width: 70%, fill: luma(240), stroke: 1pt, inset: 10pt, radius: 4pt)[
      *[SUGESTÃO DE IMAGEM DO LIVRO]*
      Insira a ilustração do jogo de adivinhar números, cortando as opções pela metade.
    ]
  ]
])

// --- SLIDE 3: O CÓDIGO ---
#slide(type: "alt1", [
  == Os Algoritmos na Prática (JavaScript)

  #set text(size: 14pt)
  
  *1. Pesquisa Simples*
  ```javascript
  function pesquisaSimples(lista, item) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === item) return i; // Encontrou
    }
    return null; // Não encontrou
  }
  ```

  *2. Pesquisa Binária*
  ```javascript
  function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
      let meio = Math.floor((baixo + alto) / 2);
      let chute = lista[meio];

      if (chute === item) return meio; // Acertou
      if (chute > item) alto = meio - 1; // Chute muito alto
      else baixo = meio + 1; // Chute muito baixo
    }
    return null;
  }
  ```
])

// --- SLIDE 4: BIG O ---
#slide(type: "alt2", [
  == Notação Big O

  A Notação Big O nos diz o quão rápido é um algoritmo. Ela não mede a velocidade em segundos cronológicos, mas sim o *ritmo de crescimento* do tempo de execução à medida que a lista ($n$) aumenta. 

  O Big O sempre reflete o *pior cenário possível* (ex: o item não está na lista).

  *A Disparidade Absurda (Lista com 4 bilhões de itens):*
  - *$O(n)$ (Simples):* Precisaria fazer até *4 bilhões* de verificações.
  - *$O(log n)$ (Binária):* Precisaria fazer no máximo *32* verificações.

  #align(center)[
    #box(width: 70%, fill: luma(240), stroke: 1pt, inset: 10pt, radius: 4pt)[
      *[SUGESTÃO DE IMAGEM DO LIVRO]*
      Insira o gráfico que compara o tempo de execução $O(n)$ (linha íngreme) e $O(log n)$ (curva suave e horizontal).
    ]
  ]
])

// --- SLIDE 5: CAIXEIRO VIAJANTE ---
#slide[
  = O Caixeiro Viajante: Tempo Fatorial $O(n!)$

  Para provar que nem todo algoritmo escala bem, o livro encerra o capítulo introduzindo um tempo de execução péssimo: *$O(n!)$*.

  - *O Problema:* Um vendedor precisa visitar $n$ cidades e encontrar a rota mais curta.
  - *A Solução Simples:* A força bruta exige calcular *todas as rotas possíveis* (permutações) e somar a distância de cada uma.
  - *A Explosão:*
    - 5 cidades = 120 rotas possíveis.
    - 15 cidades = 1.3 trilhões de rotas.
    - Se $n$ for um pouco maior, a computação se torna impossível na prática.
  - *Lição:* Conhecer a complexidade de um algoritmo impede que você tente resolver um problema impossível da maneira errada.
]

// --- SLIDE 6: REFERÊNCIAS ---
#slide(type: "standard", [
  == Referências Bibliográficas

  - BHARGAVA, Aditya Y. *Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos*. São Paulo: Novatec Editora, 2017.
])