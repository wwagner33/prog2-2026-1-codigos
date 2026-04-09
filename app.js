const mdc = require('./mdc');
const gerarSolucaoDiofantina = require('./solucao_diofantina');
const euclidesEstendido = require('./algoritmo_euclides_estendido');
const lerNumeroInt = require('./leNumeroInt');
const isPrime = require('./isPrime');
const isEven = require('./isEven');
const isMax = require('./isMax');


// // Testando a função isPrime
// console.log("Testando a função isPrime\n");
// let NumeroInt;

// //  Como a nossa função lerNumeroInt é assíncrona, precisamos usar a estrutura de Promise 
// //  para lidar com o resultado que ela retorna.

// NumeroInt = lerNumeroInt().then((num) => {
//     const resultado = isPrime(num);
//     if (resultado === null) {
//         console.warn("O número fornecido é maior que o valor máximo seguro em JavaScript. O resultado pode ser impreciso.");
//         return;
//     }
//     const str = resultado ? "é primo" : "não é primo";
//     console.log(`O número ${num} ${str}.`);
//     console.log("\n ********************************************** \n")
// });

// let NumeroInt;

// NumeroInt = lerNumeroInt().then((num) => {
//     const resultado = isEven(num);
//     if (resultado === null) {
//         console.warn("O número fornecido é maior que o valor máximo seguro em JavaScript. O resultado pode ser impreciso.");
//         return;
//     }
//     const str = resultado ? "é par" : "é ímpar";
//     console.log(`O número ${num} ${str}.`);
//     console.log("\n ********************************************** \n")
// });


const numeros = [3, 7, 2, 101, 5];
const maximo = isMax(numeros);
if (maximo === null) {
    console.error("A lista contém elementos que não são números ou a lista está vazia. O resultado pode ser impreciso.");
} else {
    console.log(`O maior número da lista [${numeros}] é: ${maximo}.`);
}
console.log("\n ********************************************** \n")


// // Testando mdc(a,b)
// console.log("Resultado do MDC:",mdc(20202020, 10100,"iterativo simples"));
// console.log("\n ********************************************** \n")

// // Testando solução diofantina

// // Suponha a equação 3x + 5y = 1, com solução particular x0 = 2, y0 = -1
// const solucao = gerarSolucaoDiofantina(3, 5, 2, -1);

// console.log(solucao.expressao);  // Saída: Solução Geral: x = 2 + 5k e y = -1 - 3k (para todo k inteiro)

// console.log(solucao.calcularParaK(0)); // Saída: { k: 0, x: 2, y: -1 }
// console.log(solucao.calcularParaK(1)); // Saída: { k: 1, x: 7, y: -4 }
// console.log(solucao.calcularParaK(-2)); // Saída: { k: -2, x: -8, y: 5 }

// console.log("\n ********************************************** \n")


// // Testando Algoritmo de Euclides Estendido

// // Vamos usar m = 3 e n = 5 (cujo MDC é 1)
// const resultado = euclidesEstendido(3, 5);

// console.log(`MDC: ${resultado.mdc}`); // Saída: MDC: 1
// console.log(`x0: ${resultado.x0}`);   // Saída: x0: 2
// console.log(`y0: ${resultado.y0}`);   // Saída: y0: -1

// // Verificando a prova real (3*2 + 5*-1 = 6 - 5 = 1):
// console.log(`Prova real: 3*(${resultado.x0}) + 5*(${resultado.y0}) = ${3 * resultado.x0 + 5 * resultado.y0}`);

// console.log("\n ********************************************** \n")

// //Aplicando o resultado do algoritmo de euclides estendido para gerar a solução diofantina geral
// const solucaoDiofantina = gerarSolucaoDiofantina(3, 5, resultado.x0, resultado.y0);
// console.log(solucaoDiofantina.expressao); // Saída: Solução Geral: x = 2 + 5k e y = -1 - 3k (para todo k inteiro)  
