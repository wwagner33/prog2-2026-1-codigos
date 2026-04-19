/* Escreva um programa que imprima na tela um triângulo retângulo com 7 linhas usando o caractere #.
O triângulo deve ser alinhado à esquerda, ou seja, a primeira linha deve conter um único caractere #, a segunda linha deve conter dois caracteres #, 
e assim por diante, até a sétima linha que deve conter sete caracteres #.
*/

function imprimirTrianguloReto() {
    for (let linha = "#"; linha.length <= 7; linha += "#") {
        console.log(linha);
    }   
}

imprimirTrianguloReto();


function imprimirTrianguloIsosceles() {
    const totalLinhas = 7;
    for (let i = 1; i <= totalLinhas; i++) {
        const espacos = " ".repeat(totalLinhas - i); // Calcula os espaços para centralizar
        const caracteres = "#".repeat(2 * i - 1); // Calcula os caracteres para formar o triângulo
        console.log(espacos + caracteres); // Imprime a linha com os espaços e os caracteres
    }
}

imprimirTrianguloIsosceles();