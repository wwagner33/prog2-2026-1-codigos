/*
Implementação de algoritmo que retorna o n-ésimo termo da Série de Fibonacci em JavaScript.

A série de Fibonacci é uma sequência de números onde cada número é a soma dos dois anteriores. 
A sequência começa com 0 e 1, e os próximos números são gerados a partir desses dois primeiros.
Exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

*/
let n=45;

/*

fibonnaciRuim() é uma implementação recursiva simples da série de Fibonacci, sem memória. Ele funciona da seguinte forma:

Digamos que queremos calcular f(5):

OBSERVAÇÃO: f(n) -> é  fibonacciRuim(n) :-)

Passo 1: f(5) = f(4) + f(3)  (pausa o f(3) para ir resolver o f(4))
Passo 2: f(4) = f(3) + f(2)  (pausa o f(2) para ir resolver o f(3))
Passo 3: f(3) = f(2) + f(1)  (pausa o f(1) para ir resolver o f(2))
Passo 4: f(2) = f(1) + f(0)  (pausa o f(0) para ir resolver o f(1))
Passo 5: f(1) = 1 (É caso base! Agora ele volta para resolver o f(0) da linha 4)
Passo 6: f(0) = 0 (É caso base! Agora ele sabe que a passo 4 vale 1+0. Ele volta para a passo 3)
Passo 7: f(1) = 1 (É caso base do f(1) da passo 3. Agora ele sabe que a linha 3 vale 1+1. Volta para a linha 2)

A função f(4) do passo 2 ainda precisa somar o seu f(2). O computador não lembra que já calculou o f(2) no passo 4. Então ele reescreve o bloco do f(2) todo de novo:

Passo 8: f(2) = f(1) + f(0)
Passo 9: f(1) = 1 (caso base)
Passo 10: f(0) = 0 (caso base)

Pronto, o passo 2 acabou. Ele descobriu que f(4) vale 3. 
Agora ele volta lá para o primeiro passo do programa para resolver o f(3) original!
No passo 1, tínhamos f(5) = f(4) + f(3). Ele vai calcular esse f(3) repetindo todos os passos da linha 3 para baixo, do zero:
Passo 11: f(3) = f(2) + f(1)
Passo 12: f(2) = f(1) + f(0)
Passo 13: f(1) = 1 (caso base)
Passo 14: f(0) = 0 (caso base)
Passo 15: f(1) = 1 (caso base, pertencente à passo 11)

Fim do processamento! O resultado de f(5) é devolvido como 5.

Note que devido a "amnésia" do computador, os passos de cálculo se repetem. São precisos 15 passos para calcular f(5). Se quisermos calcular f(10), o número de passos aumenta para 177. Para f(50), são necessários mais de 20 bilhões de passos. :-o 

O número de chamadas recursivas cresce exponencialmente, o que torna esse algoritmo muito ineficiente para valores maiores de n.

*/

/*
    CURIOSIDADE: a fórmula para calcular o número de operações recursisvas para calcular o n-ésimo termo da Série de Fibonacci é:
    C(n) = (2xF(n+1)) - 1
    Onde F(n) é o n-ésimo termo da série de Fibonacci. Isso significa que o número de operações cresce exponencialmente à medida que n aumenta, tornando o algoritmo ineficiente para valores maiores de n.
*/



/**
 * Calcula o n-ésimo termo da Série de Fibonacci de forma recursiva.
 * @param {number} n - O índice do termo a ser calculado.
 * @returns {number} - O valor do n-ésimo termo da série.
 */

function fibonacciRuim(n) {
    if(n<=1) {
        return n;
    }
    
    return fibonacciRuim(n-1) + fibonacciRuim(n-2);
}

/*


*/

function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;

    if (Object.prototype.hasOwnProperty.call(memo, n)) {
        return memo[n];
    }

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}



/**
 * Calcula o n-ésimo número de Fibonacci usando a Fórmula de Binet.
 * @param {number} n - A posição desejada na sequência.
 * @returns {number} O número de Fibonacci exato.
 */
function fibonacciBinet(n) {
    // 1. Calculamos a raiz de 5, pois ela se repete na fórmula
    const raizDe5 = Math.sqrt(5);
    
    // 2. Calculamos Phi (Proporção Áurea) e Psi (seu conjugado)
    const phi = (1 + raizDe5) / 2;
    const psi = (1 - raizDe5) / 2;
    
    // 3. Aplicamos a equação central
    const resultado = (Math.pow(phi, n) - Math.pow(psi, n)) / raizDe5;
    
    // 4. Arredondamos para o inteiro mais próximo para corrigir a imprecisão do ponto flutuante
    return Math.round(resultado);
}

/*
OBSERVAÇÃO:

O JavaScript armazena números usando o padrão de ponto flutuante de 64 bits (IEEE 754). 
Isso significa que ele só consegue garantir a exatidão matemática de inteiros até a marca de 9.007.199.254.740.991 (Number.MAX_SAFE_INTEGER).
Na série de Fibonacci, esse teto é quebrado exatamente na posição $n = 79$. 
Se você tentar calcular fibonacciBinet(79), a fórmula devolverá o resultado com os últimos dígitos incorretos devido ao esgotamento da memória para as casas decimais.

*/

// ============================================================================
// Área de Testes
// ============================================================================
const inicio1 = performance.now();
console.log(`Calculando para n=${n}: ${fibonacciRuim(n)}`);
const fim1 = performance.now();
console.log(`A função fibonacciRuim levou: ${fim1-inicio1} milissegundos para ser executada.`);

const inicio2 = performance.now();
console.log(`Calculando para n=${n}: ${fibonacciMemo(n)}`);
const fim2 = performance.now();
console.log(`A função fibonacciMemo levou: ${fim2-inicio2} milissegundos para ser executada.`);

const inicio3 = performance.now();
console.log(`Calculando para n=${n}: ${fibonacciBinet(n)}`);
const fim3 = performance.now();
console.log(`A função fibonacciBinet levou: ${fim3-inicio3} milissegundos para ser executada.`);