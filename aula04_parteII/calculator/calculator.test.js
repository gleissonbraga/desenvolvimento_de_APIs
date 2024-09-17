const calculadora = require("./calculator")

test('soma de 10 e 20 igual a 30', () => {
    expect(calculadora.sum(10, 20)).toBe(30)
})