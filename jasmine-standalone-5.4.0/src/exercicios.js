//Exercicio 1 
function multiplicarTresNumeros(a, b, c) {
  return a * b * c;
}

//Exercicio 2
function dividir(a, b) {
  if (b === 0) {
      return "Não é possível dividir por 0";
  }
  return a / b;
}

//Exercicio 3
function celsiusFahrenheit(c) {
  return c * 1.8 + 32;
}

function fahrenheitCelsius(f) {
  return (f - 32) / 1.8;
}

//Exercicio 4 
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

//Exercicio 5
function contarCaracteres(string) {
  return string.length;
}

//Exercicio 6 
function calculadora(a, b, operador) {
  switch (operador) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '*':
          return a * b;
      case '/':
          return b !== 0 ? a / b : "Não é possível dividir por 0";
      default:
          return "Operador inválido";
  }
}

