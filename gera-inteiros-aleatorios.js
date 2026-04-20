function gerarInteiroAleatorio(a, b) {
    const min = Math.ceil(Math.min(a, b));
    const max = Math.floor(Math.max(a, b));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarVariosInteirosAleatorios(n, a, b) {
    if (n <= 0) return [];
    const resultado = [];
    for (let i = 0; i < n; i++) {
        resultado.push(gerarInteiroAleatorio(a, b));
    }
    return resultado;
}

// ============================================================================
// Área de Testes
// ============================================================================

console.log("Teste 1: Gerar um único número entre 1 e 10");
console.log("Resultado:", gerarInteiroAleatorio(1, 10));

console.log("\nTeste 2: Gerar 5 números entre 50 e 100");
console.log("Resultado:", gerarVariosInteirosAleatorios(5, 50, 100));

console.log("\nTeste 3: Gerar 10 números entre -5 e 5 (Valores Negativos)");
console.log("Resultado:", gerarVariosInteirosAleatorios(10, -5, 5));