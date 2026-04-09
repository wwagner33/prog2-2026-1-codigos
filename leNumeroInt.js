/*
Função que lê um valor numérico inteiro do teclado e o retorna para quem chamou a função.

Algoritmo:
1. Lê um valor do teclado (usamos a função readline do Node.js para isso);
2. Verifica se o valor lido é um número inteiro;
3. Se for, retorna o número inteiro;
4. Se não for, exibe uma mensagem de erro e solicita a entrada novamente até que um número inteiro válido seja fornecido.

*/


function lerNumeroInt() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        function ask() {
            rl.question('Digite um número inteiro: ', (input) => {
                const num = parseInt(input, 10);
                if (!isNaN(num)) {
                    rl.close();
                    resolve(num); // Retorna o número inteiro lido
                } else {
                    console.log('Entrada inválida. Por favor, digite um número inteiro.');
                    ask(); // Solicita a entrada novamente
                }
            });
        }
        ask(); // Inicia a solicitação de entrada
    });
}

module.exports = lerNumeroInt;