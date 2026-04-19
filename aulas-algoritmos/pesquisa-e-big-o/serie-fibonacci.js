/*
Implementação da Série de Fibonacci em JavaScript
A série de Fibonacci é uma sequência de números onde cada número é a soma dos dois anteriores. 
A sequência começa com 0 e 1, e os próximos números são gerados a partir desses dois primeiros.
Exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

*/
let n=100;

/*

fibonnaciRuim() é uma implementação recursiva simples da série de Fibonacci.
|
V
f(5) = f(4) + f(3);
f(4) = f(3) + f(2);
f(3) = f(2) + f(1);
f(2) = f(1) + f(0);
f(1) = 1;
f(0) = 0;
^
|
f(2) = 1 + 0 = 1;
f(3) = 1 + 1 = 2;
f(4) = 2 + 1 = 3;
f(5) = 3 + 2 = 5;

f(50) = f(49) + f(48);
f(49) = f(48) + f(47);
f(48) = f(47) + f(46);
...
20 mil milhões operações de soma = 20 bilhões de somas (f(n-1) + f(n-2)) para calcular f(50) usando a função recursiva simples.

f(100) - 
*/

function fibonacciRuim(n) {
    if(n<=1) {
        return n;
    }
    
    return fibonacciRuim(n-1) + fibonacciRuim(n-2);
}

/*
fibonacciMemo() é uma implementação otimizada da série de Fibonacci usando memoização.

f(5)

memo[5] = f(4) + f(3);
memo[4] = f(3) + f(2);
memo[3] = f(2) + f(1);
memo[2] = f(1) + f(0);
memo[1] = 1;
memo[0] = 0;
memo = [0, 1, 1, 2, 3, 5]

*/

function fibonacciMemo(n, memo = {}) {
    if(n<=1) return n;
    if(memo[n]) return memo[n];
    
    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
    return memo[n];
}

console.log(`Calculando para n=${n}: ${fibonacciMemo(n)}`);

