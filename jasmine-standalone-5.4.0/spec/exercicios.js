//Exercicio 1
describe('Multiplicação de Três Números', function() {
  it('Deve retornar 24 para multiplicarTresNumeros(2, 3, 4)', function() {
      expect(multiplicarTresNumeros(2, 3, 4)).toBe(24);
  });
  
  it('Deve retornar 10 para multiplicarTresNumeros(1, 5, 2)', function() {
      expect(multiplicarTresNumeros(1, 5, 2)).toBe(10);
  });
  
  it('Deve retornar 0 para multiplicarTresNumeros(1, 0, 3)', function() {
      expect(multiplicarTresNumeros(1, 0, 3)).toBe(0);
  });
});

//Exercicio 2
describe('Divisão de Dois Números', function() {
    it('Deve retornar 5 para dividir(10, 2)', function() {
        expect(dividir(10, 2)).toBe(5);
    });
    
    it('Deve retornar "Não é possível dividir por 0" para dividir(7, 0)', function() {
        expect(dividir(7, 0)).toBe("Não é possível dividir por 0");
    });
});

//Exercicio 3
describe('Conversão de Temperaturas', function() {
    it('Deve converter 0°C para 32°F', function() {
        expect(celsiusFahrenheit(0)).toBe(32);
    });
    
    it('Deve converter 100°C para 212°F', function() {
        expect(celsiusFahrenheit(100)).toBe(212);
    });
    
    it('Deve converter 32°F para 0°C', function() {
        expect(fahrenheitCelsius(32)).toBe(0);
    });
    
    it('Deve converter 212°F para 100°C', function() {
        expect(fahrenheitCelsius(212)).toBe(100);
    });
});

//Exercicio 4
describe('Cálculo de Média', function() {
    it('Deve retornar 4 para calcularMedia(3, 4, 5)', function() {
        expect(calcularMedia(3, 4, 5)).toBe(4);
    });
    
    it('Deve retornar 20 para calcularMedia(10, 20, 30)', function() {
        expect(calcularMedia(10, 20, 30)).toBe(20);
    });
});

//Exercicio 5
describe('Contagem de Caracteres', function() {
    it('Deve retornar 5 para contarCaracteres("hello")', function() {
        expect(contarCaracteres("hello")).toBe(5);
    });
    
    it('Deve retornar 5 para contarCaracteres("12345")', function() {
        expect(contarCaracteres("12345")).toBe(5);
    });
});

//Exercicio 6 
describe('Calculadora Básica', function() {
    it('Deve retornar 6 para calculadora(4, 2, "+")', function() {
        expect(calculadora(4, 2, '+')).toBe(6);
    });
    
    it('Deve retornar 2 para calculadora(4, 2, "/")', function() {
        expect(calculadora(4, 2, '/')).toBe(2);
    });
    
    it('Deve retornar "Não é possível dividir por 0" para calculadora(7, 0, "/")', function() {
        expect(calculadora(7, 0, '/')).toBe("Não é possível dividir por 0");
    });
    
    it('Deve retornar 2 para calculadora(4, 2, "-")', function() {
        expect(calculadora(4, 2, '-')).toBe(2);
    });
    
    it('Deve retornar 8 para calculadora(4, 2, "*")', function() {
        expect(calculadora(4, 2, '*')).toBe(8);
    });
});
