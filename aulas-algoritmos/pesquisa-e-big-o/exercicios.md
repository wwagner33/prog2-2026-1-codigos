# Exercícios

1. **Leia o texto a seguir e implemente uma função que permita calcular o n-ésimo número de uma série de Fibonacci, baseado na fórmula de Binet.**

>**Fórmula de Binet**
>
>A fórmula para calcular o n-ésimo termo da **Série de Fibonacci** de forma fechada é:
>$F(n) =  \frac{(\phi^n - \psi^n)}{\sqrt{5}}$
>Onde $\phi = \frac{(1 + √5)}{2}$, $\psi = \frac{(1 - √5)}{2}$ e $n$ é a posição na Série de Fibonacci.
>Essa fórmula é conhecida como a fórmula de Binet e permite calcular o n-ésimo termo da Série de Fibonacci diretamente, sem a necessidade de calcular os termos anteriores.
>No entanto, devido à natureza irracional de $\phi$ e $\psi$, essa fórmula pode não ser precisa para valores grandes de n devido a limitações de precisão numérica.
---
2. **Para medir o tempo (em milissegundos) que um programa leva para ser executado, podemos usar a função Javascript (Node.js). Leia o texto de explicação, a seguir, e faça um programa que mostre o tempo de execução das abordagens de cálculo do n-ésimo termo da Série de Fibonacci, usando Recorrência sem Memória, Recorrência com Memória e a abordadem usando a Fórmula de Binet.**

> **Medindo tempo de execução**
> 
> Para medirmos o tempo de execução de uma função, podemos usar o `console.time()`, o `Date.now()` ou o `performance.nopw()`. 
> A forma mais simples é usando o `Date.now()`, por ser uma função que existe há mais tempo no Javascript. 
> Vejamos como poderíamos usá-la para calcular o tempo de execução de uma função conta de 1 até 1.000.000:
```javascript
// Coloquei este código no arquivo testa-tempo.js
function contaMilhao(){
    for(let n=1;n<=1000000;n++);
}

const inicio = Date.now();
contaMilhao();
const fim = Date.now();
console.log(`A função levou: ${fim-inicio} milissegundos para ser executada.`);
```

> Se você executar este código, usando o Node.js, verá:
```bash
$ node testa-tempo.js
A função levou: 2 milissegundos para ser executada.
```

> Para ter uma maior precisasão na medida de tempo, podendo calcular frações de milissegundo, foi criada a função `performance.now()`. 
> Se medirmos o tempo de execução da função de contagem até um milhão, usando essa abordagem, teremos:

```bash
$ node testa-tempo.js
A função levou: 1.696361999999997 milissegundos para ser executada.
```

> **Note que, neste caso, a fração o tempo não foi "arredondado" para dois milissegundos.**
---
3. **Crie uma função para procurar uma palavra no *array* fornecido a seguir, usando o método de busca simples (linear). Faça um programa para medir o tempo que a sua função de busca simples leva para achar uma palavra.**
```javascript
const nomesSimples = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
    "Fernanda", "Gabriel", "Helena", "Igor", "Julia",
    "Kevin", "Larissa", "Marcos", "Natalia", "Otavio",
    "Paula", "Quintino", "Rafaela", "Samuel", "Tatiana",
    "Ulysses", "Vitoria", "Wagner", "Ximena", "Yago",
    "Zelia", "Aline", "Bernardo", "Camila", "Diego",
    "Erica", "Fabio", "Giovana", "Henrique", "Isabela",
    "Joao", "Karina", "Leonardo", "Mariana", "Nicolas",
    "Olivia", "Pedro", "Quiteria", "Ricardo", "Sofia",
    "Thiago", "Ursula", "Vinicius", "Wesley", "Xavier",
    "Yasmin", "Zeca", "Amanda", "Breno", "Carolina",
    "Denis", "Elisa", "Fernando", "Gustavo", "Heitor",
    "Isadora", "Jose", "Katia", "Lucas", "Melissa",
    "Neymar", "Osvaldo", "Priscila", "Quincas", "Renata",
    "Sergio", "Talita", "Uriel", "Valdir", "Wellington",
    "Xenia", "Yuri", "Zilda", "Alice", "Caio",
    "Cintia", "Douglas", "Elias", "Flavia", "Guilherme",
    "Hugo", "Ingrid", "Julio", "Kauã", "Leticia",
    "Mateus", "Noemi", "Orlando", "Patricia", "Queiroz",
    "Rodrigo", "Silvia", "Tomas", "Uira", "Vanessa"
];
```
---
4. **Modifique a função do exercício anterior de tal forma que seja possível procurar por parte de uma palavra e sua função devolva um vetor com todas as palavras que iniciarem pela *string* que é fornecida como parâmetro.**
---
5. **Modifique a função de pesquisa binária, fornecida no texto do professor, para que possa ser utilizada para realizar a busca de uma palavra no *array* de palavras fornecido no exercício 3. Faça um programa que mostre o tempo que a função de pesquisa leva para poder achar a palavra desejada.**