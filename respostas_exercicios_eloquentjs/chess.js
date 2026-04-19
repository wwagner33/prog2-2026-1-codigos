/*
    Programa que gera uma string repreentando uma grade de 8 x 8, 
    usando caracteres de nova linha para separar as linhas.
    Cada posição da grade deve conter um espaço " " ou um caractere "#". 
    Os caracteres devem formar um tabuleiro de xadrez.
    
    Algoritmo:
    1. Criar uma string vazia para armazenar a grade;
    2. Para cada linha de 0 a 7:
       a. Para cada coluna de 0 a 7:
          i. Se a soma da linha e da coluna for par, adicionar um espaço à string; caso contrário, adicionar um "#";
       b. Adicionar um caractere de nova linha ("\n") ao final de cada linha;
    3. Imprimir a string resultante.
*/

let tam = 8; //8x8
let grade = "";

for (let linha = 0; linha < tam; linha++) {
    for (let coluna = 0; coluna < tam; coluna++) {
        grade += (linha + coluna) % 2 === 0 ? " " : "#";
    }
    grade += "\n"; // Adiciona uma nova linha após cada linha da grade
}

console.log(grade);