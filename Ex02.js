//Crie uma função que calcule o fatorial de um número inteiro positivo.
function fatorial(n) {
    if (n < 0) return "Número inválido";
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  console.log(fatorial(5));