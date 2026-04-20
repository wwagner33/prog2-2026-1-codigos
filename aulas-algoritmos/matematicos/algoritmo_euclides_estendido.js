function euclidesEstendido(a, b) {
    // Variáveis para rastrear os restos (como no algoritmo original)
    let r0 = a, r1 = b;
    
    // Variáveis para rastrear os coeficientes de 'a' (x0)
    let s0 = 1, s1 = 0;
    
    // Variáveis para rastrear os coeficientes de 'b' (y0)
    let t0 = 0, t1 = 1;

    // O loop continua até que o resto atual (r1) seja 0
    while (r1 !== 0) {
        // Encontra o quociente inteiro da divisão atual
        let q = Math.floor(r0 / r1);

        // Atualiza os restos (MDC)
        let r_temp = r0 - q * r1;
        r0 = r1;
        r1 = r_temp;

        // Atualiza os coeficientes 's' (para encontrar x0)
        let s_temp = s0 - q * s1;
        s0 = s1;
        s1 = s_temp;

        // Atualiza os coeficientes 't' (para encontrar y0)
        let t_temp = t0 - q * t1;
        t0 = t1;
        t1 = t_temp;
    }

    // Retorna um objeto com o MDC e os valores iniciais de x e y
    return {
        mdc: r0,
        x0: s0,
        y0: t0
    };
}

module.exports = euclidesEstendido;