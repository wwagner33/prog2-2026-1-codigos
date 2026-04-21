function contaMilhao(){
    for(let n=1;n<=1000000;n++);
}

const inicio = Date.now();
contaMilhao();
const fim = Date.now();
console.log(`A função levou: ${fim-inicio} milissegundos para ser executada.`);