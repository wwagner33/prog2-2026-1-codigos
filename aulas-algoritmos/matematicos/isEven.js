/*
    Função para verificar se um número é par ou ímpar.

    Algoritmo:
    1. Testa se o número fornecido é um número inteiro. Se não for, lança um erro;
    2. Recebe um número como entrada;
    2. Verifica se o número é divisível por 2 (ou seja, se o resto da divisão por 2 é zero);
    3. Se for divisível por 2, retorna true (indica que é par); caso contrário, retorna false (indica que é ímpar).
*/
function isEven(num) {
    // Testa se o número fornecido é um número inteiro
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new Error('A entrada deve ser um número inteiro.');
    }
    return num % 2 === 0;
}

module.exports = isEven;