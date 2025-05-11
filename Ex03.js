//Crie uma função que receba uma string e retorne a mesma string invertida.
function inverterString(str) {
    return str.split("").reverse().join("");
  }
  console.log(inverterString("JavaScript"));