//Dado um array de números, crie uma função que retorne o maior valor presente nele.
function maiorNumero(array) {
    return Math.max(...array);
  }
  console.log(maiorNumero([10, 20, 35, 4, 99, 1]));