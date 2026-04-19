const mdc = require('./mdc');

function gerarSolucaoDiofantina(m,n, x0,y0) {
    if(m===0 && n===0){
            console.log("Entrada inválida. Os parâmetros m e n não podem ser ambos zero.");
            return null;
    }
    if(mdc(m,n) !== 1){
        console.log("Não existe solução inteira para esta equação, pois m e n não são co-primos (mdc(m,n) !== 1).");
        return null;
    }

    // Ajusta os sinais para a exibição em texto (evita "+ -5k")
    const sinalN = n >= 0 ? '+' : '-';
    // O sinal de 'm' é invertido na string porque a fórmula de 'y' é (y0 - km)
    const sinalM = m >= 0 ? '-' : '+'; 

    const expressaoX = `x = ${x0} ${sinalN} ${Math.abs(n)}k`;
    const expressaoY = `y = ${y0} ${sinalM} ${Math.abs(m)}k`;

    return {
        // 1. A expressão em texto para exibição
        expressao: `Solução Geral: ${expressaoX} e ${expressaoY} (para todo k inteiro)`,
        
        // 2. Um método para calcular (x, y) passando um valor específico de k
        calcularParaK: function(k) {
            return {
                k: k,
                x: x0 + (k * n),
                y: y0 - (k * m)
            };
        }
    };
}    

module.exports = gerarSolucaoDiofantina;