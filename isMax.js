/*
    Função para verifica qual o maior número de uma lista de n números fornecidos como entrada.

    Algoritmo:
    1. Testa se a lista fornecida só possui números;
    2. Recebe uma lista de números como entrada;
    3. Inicializa uma variável para armazenar o maior número encontrado, começando com o primeiro número da lista;
    4. Itera sobre os números da lista, comparando cada número com o maior número armazenado;
    5. Se encontrar um número maior do que o armazenado, atualiza a variável do maior número;
    6. Após iterar por toda a lista, retorna o maior número encontrado.
*/


function isMax(numbers) {
    // Testa se a lista fornecida só possui números
    if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
        return null;
    }
    
    // Inicializa a variável do maior número com o primeiro elemento da lista
    let max = numbers[0];

    // Itera sobre os números da lista para encontrar o maior número
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
module.exports = isMax;
