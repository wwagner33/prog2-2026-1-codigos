function pesquisaSimples(lista, item) {
  // O loop percorre a lista do índice 0 até o final
  for (let i = 0; i < lista.length; i++) {
    
    // Se o item atual for o que estamos buscando, paramos!
    if (lista[i] === item) {
      return i; // Retorna a posição onde encontrou
    }
  }
  
  // Se o loop terminar e não encontrar nada:
  return null;
}

// Repare: a lista NÃO precisa estar em ordem alfabética!
let agenda = ["Zeca", "Ana", "Carlos", "Beatriz", "João"];

console.log(pesquisaSimples(agenda, "Carlos")); // Saída: 2 (terceira posição)
console.log(pesquisaSimples(agenda, "Maria"));  // Saída: null