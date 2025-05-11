//Escreva uma função que receba uma string e retorne quantas vogais (a, e, i, o, u) ela contém.
function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}
console.log(contarVogais("Olá, mundo!"));