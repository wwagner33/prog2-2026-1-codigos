/**
 * Calcula o Máximo Divisor Comum (MDC) de dois números usando o Algoritmo de Euclides.
 * @param {number} a 
 * @param {number} b 
 * @param {string} tipo 
 * @returns {number} -1 se a entrada for inválida, caso contrário, o resultado do MDC.
 * 
 */

function mdc(a,b,tipo="iterativo otimizado"){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log("Entrada inválida. Ambos os parâmetros devem ser números.");
        return -1;
    }
    if(a<=0){
        return -1;
    }
    if(a==b){
        return a;
    }
    if(b==1){
        return 1;
    }
    if(a<b){
        let temp=a;
        a=b;
        b=temp;
    }

    /* 
        Usando o algoritmo de euclides para o mdc(a,c)
        r_k+1 = r_k-1 - q_k * r_k
        q_k = r_k-1 / r_k

        Veja que: r_0 = a, r_1 = b, r_2 = a%b

    */
    if(tipo=="iterativo simples"){
        if(a%b==0){
            return b;
        }
        
        let r_anterior=a;
        let r_atual=b; 
        let q=Math.floor(a/b);
        let r_proximo;

        while(r_atual!=0){
            r_proximo=r_anterior-(q*r_atual);
            if(r_proximo==0){
                return r_atual;
            } else {
                r_anterior=r_atual;
                r_atual=r_proximo;
                q=Math.floor(r_anterior/r_atual);
            }
        }
    } else if(tipo=="iterativo otimizado"){
        /* 
            Usa o princípio matemático MDC(a,b) = MDC(b, a mod b).
            Neste caso, r = a mod b é o próximo valor de b, e b é o próximo valor de a. Ou seja:
            a' = b
            b' = a mod b 

        */
        while(b!=0){
            let r=a%b;
            a=b;
            b=r;
        }
        return a;
    } else if(tipo=="recursivo"){
        if(a%b==0){
            return b;
        } else {
            return mdc(b, a%b);
        }
    } else {
        console.log("Tipo de algoritmo desconhecido. Use 'iterativo' ou 'recursivo'.");
        return -1;
    }
    
}

module.exports=mdc;