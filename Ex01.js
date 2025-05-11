//Escreva uma função que receba um número como parâmetro e retorne se ele é "par" ou "ímpar".
function parOuImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
  }
  console.log(parOuImpar(7));