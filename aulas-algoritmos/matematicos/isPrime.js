/* 

Função que testa se um determinado número fornecido é primo (Primality Test)

Algoritmo:

1. Checa se o número é menor ou igual a 1, caso seja, retorna false (não é primo);
2. Checa se o número é 2 ou 3, caso seja, retorna true (é primo);
3. Elimina os números pares e os mltiplos de 3, pois eles não são primos (exceto 2 e 3);
4. Calcula a raiz quadrada do número fornecido.
5. Itera os números de 5 até a raiz quadrada do número, verificando se o número é divisível por algum desses números. 
5.1 Se for, retorna false (não é primo);
5.2 Se não for, continua a iteração;
6. Se a iteração terminar sem encontrar nenhum divisor, retorna true (é primo).

*/


function isPrime(num) {
    if (Number.isSafeInteger(num) === false) {
        return null; // Retorna null para indicar que o resultado é impreciso
    }

    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    const sqrtNum = Math.sqrt(num); // Calcula a raiz quadrada do número

    for (let i = 5; i <= sqrtNum; i += 6) { // Verifica os números da forma 6k ± 1
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

module.exports = isPrime;
