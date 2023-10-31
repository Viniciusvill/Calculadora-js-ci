const {somar} = require("./calculador")

describe('Teste da Calculadora', () =>{
    test('deveria somar dois numeros', () => {
      expect(somar(2,3)).toBe(5);
      expect(somar(-1,-1)).toBe(-2);
      expect(somar(2,2)).toBe(4);
      expect(somar(10,10)).toBe(20);
    });
    
});