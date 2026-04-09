/*
    Função que retorna o menor número de uma lista de n números fornecidos como entrada.

    Algoritmo:
    1. Testa se a lista fornecida só possui números;
    2. Recebe uma lista de números como entrada;
    3. Inicializa uma variável para armazenar o menor número encontrado, começando com o primeiro número da lista;
    4. Itera sobre os números da lista, comparando cada número com o menor número armazenado;
    5. Se encontrar um número menor do que o armazenado, atualiza a variável do menor número;
    6. Após iterar por toda a lista, retorna o menor número encontrado.
*/

function isMin(numbers) {
    // Testa se a lista fornecida só possui números
    if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
        return null;
    }

    // Inicializa a variável do menor número com o primeiro elemento da lista
    let min = numbers[0];

    // Itera sobre os números da lista para encontrar o menor número
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
module.exports = isMin;
