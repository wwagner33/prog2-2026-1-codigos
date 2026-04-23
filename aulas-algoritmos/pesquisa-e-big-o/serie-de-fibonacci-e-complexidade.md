# Série de Fibonacci e Complexidade de Algoritmos

Este documento analisa três abordagens para o cálculo da série de Fibonacci em JavaScript, explorando conceitos de eficiência algorítmica, o impacto da recursão na memória e os limites físicos da precisão numérica em computação.


## 1. A Série de Fibonacci
A sequência de Fibonacci é uma sucessão de números inteiros onde cada termo é a soma dos dois anteriores, iniciando-se tipicamente por 0 e 1.
$$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \dots$$
Matematicamente, ela é definida pela relação de recorrência:
$$F(n) = F(n-1) + F(n-2)$$
Com os casos base: $F(0) = 0, F(1) = 1$.


## 2. Abordagens de Implementação e Complexidade

### A. Recursão Simples: O Algoritmo "Esquecido"
A função `fibonacciRuim(n)` utiliza uma tradução direta da fórmula matemática. Embora elegante, ela é extremamente ineficiente.

* **O Problema da Amnésia:** O computador não armazena resultados de subproblemas já resolvidos. Para calcular $f(5)$, ele precisa calcular $f(4)$ e $f(3)$. Porém, dentro do cálculo de $f(4)$, ele já calculou $f(3)$ uma vez. Ele repetirá todo o trabalho desnecessariamente.
* **Complexidade de Tempo:** $O(2^n)$ (Exponencial). O número de chamadas cresce tão rápido que, para $n=50$, o algoritmo levaria décadas para terminar em um PC comum.
* **Custo de Operações:** O número total de chamadas recursivas é dado por $C(n) = (2 \times F(n+1)) - 1$.


### B. Memoization: O Algoritmo com Memória
A função `fibonacciMemo(n)` resolve a ineficiência da recursão simples através de um **Cache** (ou dicionário).

1.  **Consulta:** Antes de calcular $f(n)$, o algoritmo verifica no objeto `memo` se o valor já existe.
2.  **Armazenamento:** Se não existir, ele calcula uma única vez e salva o resultado.
3.  **Complexidade de Tempo:** $O(n)$ (Linear). Cada número da sequência é calculado exatamente uma vez. Isso permite calcular $n=100$ quase instantaneamente.

### C. Fórmula de Binet: A Abordagem Matemática
A função `fibonacciBinet(n)` utiliza a Proporção Áurea ($\phi$) para encontrar o valor diretamente:
$$F(n) = \frac{\phi^n - \psi^n}{\sqrt{5}}$$
Onde $\phi = \frac{1 + \sqrt{5}}{2}$ e $\psi = \frac{1 - \sqrt{5}}{2}$.

* **Complexidade:** $O(1)$ (Tempo constante, ignorando o custo da operação de potência).
* **Limitação:** O JavaScript utiliza o padrão **IEEE 754** (ponto flutuante de 64 bits). Isso limita a precisão de inteiros exatos até $2^{53} - 1$ (`Number.MAX_SAFE_INTEGER`).
* **O "Teto" de Fibonacci:** No $n=79$, a precisão do JavaScript é rompida. A partir daí, os resultados da fórmula de Binet começam a divergir da realidade devido ao arredondamento das casas decimais.



## 3. Cálculo do Tempo de Execução

Para medir a eficiência real, utilizamos o método `performance.now()`. Diferente do `Date.now()`, este método oferece precisão em microssegundos, essencial para comparar algoritmos rápidos como o de Binet e o com Memoization.

```javascript
const inicio = performance.now();
// Execução da função
const fim = performance.now();
console.log(`Tempo: ${fim - inicio} ms`);
```

### Comparativo Típico (para $n=45$):
| Algoritmo | Complexidade | Tempo Estimado |
| :--- | :--- | :--- |
| **Recursão Simples** | $O(2^n)$ | ~10 a 20 segundos |
| **Memoization** | $O(n)$ | < 0.1 milissegundo |
| **Fórmula de Binet** | $O(1)$ | < 0.1 milissegundo |



## 4. Conclusão
O estudo da série de Fibonacci ilustra perfeitamente como a escolha de um algoritmo pode ser mais importante do que o poder do hardware. Enquanto a recursão simples "trava" o navegador para valores médios de $n$, a aplicação de **Memoization** transforma um processo impossível em uma tarefa trivial, demonstrando o poder da gestão de estado e memória na engenharia de software.