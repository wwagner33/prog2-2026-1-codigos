/*
    Programa FizzBuzz: Escreve os números de 1 a 100, substituindo múltiplos de 3 por "Fizz", 
    múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz".

    Algoritmo:
    1. Para cada número de 1 a 100:
       a. Se o número for múltiplo de 3 e 5, imprima "FizzBuzz";
       b. Caso contrário, se o número for múltiplo de 3, imprima "Fizz";
       c. Caso contrário, se o número for múltiplo de 5, imprima "Buzz";
       c. Caso o número não seja múltiplo de 3 ou 5, imprimir "FizzBuzz"
       d. Caso contrário, imprima o número.
*/

for (let i = 1; i <= 100; i++) {
  let output = "";
  
  if (i % 3 === 0 && i % 5 === 0) {
    output += "FizzBuzz";
  } else if (i % 3 === 0) {
    output += "Fizz";
  } else if (i % 5 === 0) {
    output += "Buzz";
  }
  
  // Se output estiver vazio, significa que o número não é múltiplo de 3 ou 5
  console.log(output || i);
}


