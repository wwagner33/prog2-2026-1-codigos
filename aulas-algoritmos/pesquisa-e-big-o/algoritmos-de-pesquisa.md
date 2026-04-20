# O que são Algoritmos de Pesquisa?
*Por Wellington Sarmento*

Os algoritmos de pesquisa (ou busca) são sequências lógicas de instruções criadas para **encontrar a posição exata de um item específico dentro de uma estrutura de dados** (como um vetor, lista ou banco de dados). 

Sua função principal é responder a duas perguntas simples: *"Esse item existe nesta lista?"* e, se sim, *"Em qual índice (posição) ele está?"*.

### Exemplos de Utilização no Dia a Dia
As buscas estão por trás de quase tudo que fazemos em sistemas digitais. Elas são utilizadas quando você:
> * Digita o nome de um contato na agenda do celular (como exemplificado no seu arquivo `pesquisa-simples.js`);
> * Procura por um produto específico em uma loja virtual com milhares de itens cadastrados;
> * Usa o "Ctrl+F" ou "Cmd+F" para achar uma palavra dentro de um documento longo;
> * Faz uma consulta em um banco de dados hospitalar para encontrar o prontuário de um paciente através do CPF.

### Problemas e Desafios na Criação
O principal problema ao projetar ou escolher um algoritmo de busca é o balanço entre **Velocidade vs. Organização Prévia**.

> * **O problema do tempo de execução:** Varrer uma lista pequena é instantâneo, mas buscar um registro específico em uma lista desordenada com milhões de itens pode travar um sistema;
> * **O custo da ordenação:** Algoritmos extremamente rápidos (como a Pesquisa Binária) exigem uma "taxa de entrada": a lista precisa estar previamente ordenada. Manter uma lista constantemente ordenada sempre que um novo dado é inserido consome processamento e memória. O desafio do programador é decidir se vale a pena gastar tempo organizando os dados ou se é melhor usar uma busca mais simples que aceite dados brutos.

## A Pesquisa Linear (Simples)

Como mostrado nos seus arquivos `pesquisa-linear.html` e `pesquisa-simples.js`, a Pesquisa Linear é a abordagem mais direta possível.

Ela funciona como um inspetor que verifica uma fila de pessoas, uma por uma, a partir do início. O algoritmo inicia no índice 0 da lista e compara o valor ali armazenado com o valor alvo. Se for igual, a busca acaba com sucesso. Se não for, ele avança para o índice $1$, depois para o $2$, e assim por diante.

> * **Vantagem:** É extremamente simples de implementar e **não exige que os dados estejam ordenados**. Funciona em qualquer lista;
> 
> * **Desvantagem:** É ineficiente para grandes volumes de dados. Se a lista tiver 1 milhão de itens e o alvo for o último (ou não existir), o computador será obrigado a fazer 1 milhão de verificações individuais. Na ciência da computação, dizemos que seu pior cenário tem complexidade espacial e temporal $O(n)$.

## Pesquisa Binária

Diferente da Pesquisa Linear, a **Pesquisa Binária** só funciona em listas previamente ordenadas. Ela é incrivelmente rápida porque corta o problema pela metade a cada passo:

> 1.  Ela olha o elemento exatamente no **meio** da lista;
> 2.  Se o alvo for maior que esse meio, o algoritmo tem a certeza absoluta de que pode ignorar toda a metade esquerda da lista;
> 3.  Ele repete o processo apenas na metade direita, definindo um novo meio, até encurralar o número.
> 
Isso permite encontrar um item entre 1 milhão de registros em apenas $\approxeq 20$ passos (complexidade $O(\log n))$.

## Exemplos de código para pesquisas lineares e binárias

> * [Animação de Pesquisa Linear](pesquisa-linear.html)
> * [Código Javascript de Pesquisa Linear](pesquisa-linear.js)
> * [Animação de Pesquisa Binária](pesquisa-binaria.html)
> * [Código Javascript de Pesquisa Binária](pesquisa-binaria.js)