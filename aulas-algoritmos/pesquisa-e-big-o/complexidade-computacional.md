# Introdução à Complexidade de Algoritmos

*Por Wellington Sarmento*


## O que é a análise de complexidade de um algoritmo?

Podemos solucionar um problema algoritmo de diferentes formas, porém, cada forma pode demandar um maior tempo de processamento ou uso de memória por parte do computador. Como estes recursos são limitados, precisamos sempre buscar por soluções que possam ter um **gasto** menor dos recursos disponíveis pelo computador.

A complexidade de um algoritmo pode ser entendida como *o cálculo de custo computacional que este algoritmo pode demandar*. Este custo pode ser visto tanto como “tempo de uso da CPU”, quanto pelo uso de memória principal do computador.

### Complexidade Temporal x Complexidade Espacial

A Complexidade Temporal pode ser vista como o número de operações realizadas pelo algoritmo, enquanto a complexidade espacial, diz respeito ao espaço (*space*) de memória utilizado pelo algoritmo. A Complexidade Espacial pode ser vista como o uso de “células de memória” (como gavetas em um armário),por parte de um algoritmo.

## Passos básicos para cálculo de Complexidade Temporal (*Big O*)

Não existe uma "forma" geral e exata para o cálculo de complexidade temporal, porém, podemos listar alguns passos que podem ser utilizados para este fim, baseado na experiência que tivemos com algoritmos.

### Passo 1: Identifique o "n" (Tamanho da Entrada)

A primeira coisa a fazer é descobrir o que faz o seu algoritmo trabalhar mais. Esse é o seu $n$.

* Se você tem uma função que varre uma lista de usuários, $n$ é o tamanho dessa lista;
* No nosso caso de Fibonacci, $n$ era a posição do número desejado;
* Se a função apenas soma a \+ b, a entrada não importa para o tempo, então chamamos o trabalho de constante: $O(1)$.

### Passo 2:  Conte os Laços (*Loops*)

O coração da análise de complexidade está em contar quantas vezes o algoritmo repete uma ação em relação ao $n$.

* **Sem laços (Sequencial)**: se o código só tem comandos if/else, declaração de variáveis e contas matemáticas simples, ele roda de uma vez só:
  * Resultado: $O(1)$  
* **Um laço simples (*for* ou *while*)**: se o código varre a lista inteira uma vez:
  * Resultado: $O(n)$
* **Laços aninhados (um for dentro de outro *for*)**:Pesquisa Para cada item de $n$, ele roda $n$ vezes de novo. Muito comum em ordenação ou varredura de matrizes 2D:
  * Resultado: $n \times n =$ $O(n^2)$  
* **Corte pela metade (*while* dividindo)**: pesquisa Se o algoritmo divide o problema pela metade a cada passo (como buscar um nome em uma lista telefônica, abrindo no meio e ignorando a outra metade):
  * Resultado: $O(\log n)$

### Passo 3: Ignore as Constantes (A Regra do "Desapego")

No Big O, nós estamos pensando no infinito. Valores fixos não importam.

Imagine um algoritmo que tem dois laços *for* separados, um depois do outro. Ele varre a lista $n$ e depois varre $n$ de novo.

Matematicamente, o trabalho é $n + n = 2n$.

No Big O, você joga a constante (o número 2\) fora. A complexidade não é $O(2n)$, ela cai para $O(n)$.

Por quê? Porque quando $n$ for 1 bilhão, a diferença entre 1 bilhão ou 2 bilhões para a arquitetura do computador ainda é um tempo linear. A linha no gráfico continua sendo uma reta inclinada.

### Passo 4: Fique Apenas com o Pior Termo (O Maior Vilão)

Os algoritmos costumam ter várias partes. Imagine uma função que faz o seguinte:

> 1. Imprime o primeiro item da lista: Trabalho $1$  
> 2. Varre a lista inteira usando um for: Trabalho $n$  
> 3. Roda dois laços aninhados para comparar todos contra todos: Trabalho $n^2$

A equação total de operações seria: $n^2 + n + 1$.

No Big $O$, você elimina tudo que não for o termo de maior crescimento. O $n$ e o $1$ são tão insignificantes perto do peso do $n^2$ (quando a lista for gigantesca) que nós os ignoramos. A complexidade final dessa função é apenas $O(n^2)$.

### Resumo Visual das Categorias de Complexidade (Temporal)

Para fixar de vez, basta lembrar da hierarquia de complexidade. Todo algoritmo vai se encaixar em uma dessas faixas de velocidade.

| Notação | Nome | Como identificar de forma rápida? | Análise |
| :---- | :---- | :---- | :---: |
| $O(1)$ | Constante | Não tem laços. Só lê *arrays* por índice ou faz matemática direta. | Excelente |
| $O(\\log n)$ | Logarítmica | O laço divide o $n$ por 2 a cada ciclo (ex: Busca Binária). | Ótimo |
| $O(n)$ | Linear | Tem um único laço *for* ou *while* que vai até $n$. | Bom |
| $O(n \log n)$ | Log-Linear | Algoritmos eficientes de ordenação de dados (Merge Sort, Quick Sort). | Razoável |
| $O(n^2)$ | Quadrática | Dois laços aninhados (um dentro do outro). | Perigoso para $n$ grande |
| $O(2^n)$ | Exponencial | Recursões ingênuas com duas ou mais chamadas (Nosso Fibonacci puro\!). | Ruim / Trava a máquina |
| $O(n\!)$ | Fatorial | Gera todas as combinações ou permutações possíveis de algo. | Inviável |


## O que significa uma complexidade $\log n$?


> ### Exponenciação e Logaritmo
> 
> **Exponenciação (Multiplicar)**: pesquisa Se você começa com 1 e multiplica por 2 várias vezes, você está calculando uma potência. "Quantas vezes eu multiplico o 2 para chegar a 1024?" A resposta é 10 (pois $2^{10} = 1024$);
> **Logaritmo (Dividir)**: pesquisa Se você começa com 1024 e divide por 2 várias vezes, você está calculando o logaritmo na **base 2**. "Quantas vezes eu preciso dividir 1024 pela metade até sobrar apenas 1?" A resposta é 10\. Matematicamente, escrevemos isso como $\log_2 (1024) = 10$.
>

### A Prova Matemática no Laço

Imagine que você tem um laço *while* que pega um número $N$ e o divide por $2$ a cada ciclo, parando quando o número chegar a $1$ (que é como a Pesquisa Binária funciona). Vamos contar os passos ($k$):


> * Passo 0 (Início): o tamanho é $N$  
> * Passo 1: o tamanho cai para $\frac{N}{2}$  
> * Passo 2: o tamanho cai para $\frac{N}{4}$ (ou seja, $\frac{N}{2^2}$)  
> * Passo 3: o tamanho cai para $\frac{N}{8}$ (ou seja, $\frac{N}{2^3}$)  
> * ...
> * Passo $k$: o tamanho cai para $\frac{N}{2^k}$

Nós sabemos que o laço para quando o tamanho da divisão chega a Pesquisa1Pesquisa. Então, podemos montar a seguinte equação para descobrir quem é o $k$ (o número total de passos):

$$\frac{N}{2^k} = 1$$  
Agora, resolvemos a equação:

Multiplicamos ambos os lados por $2^k$:

$$N = 2^k$$  
Para isolar o $k$ (que é o número de vezes que o laço rodou), nós aplicamos o logaritmo na base 2 em ambos os lados. Pela regra da matemática, o logaritmo "cancela" a base:

$$\log_2(N) = k$$  
Ou seja, o número de passos $k$ é exatamente igual ao logaritmo de $N$. É por isso que a complexidade é $O(\log n)$.

## Exemplo de Pesquisa no "Mundo Real": Procurando uma palavra no Dicionário

Se você tem um dicionário de 1000 páginas e quer achar uma palavra:

1. Uma Pesquisa Linear $O(n)$ faria você virar uma página de cada vez. Pior cenário: 1000 passos;
   
2. Uma busca Logarítmica $O(\log n)$ faz você abrir no meio:
  2.1 A palavra está na primeira ou segunda metade? Você descarta 500 páginas de uma vez; 
  2.2 Abre no meio de novo;
  2.3 **Descarta 250**;
  2.4 Depois *125, 62, 31, 15, 7, 3, 1*, dependendo onde estaja a palavra desejada.

Em no máximo **10 passos**, você pode achar qualquer palavra em um livro de 1000 páginas. Se o livro tivesse um milhão de páginas, você não precisaria de um milhão de passos, precisaria de apenas **20 passos** ($2^{20} \approx 1.000.000$).
