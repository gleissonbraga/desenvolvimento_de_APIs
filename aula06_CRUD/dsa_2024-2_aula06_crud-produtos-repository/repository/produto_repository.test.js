const produtoRepository = require("./produto_repository.js");


test('Quando buscar por um id existente, deve retornar o dado corretamente', () => {
    //Vou inserir um segundo produto para o teste (id=2)
    const produtoInserido = produtoRepository.inserir({
    nome: "Feijao",
    categoria: "alimento",
    preco: 7.00
    });
    const resultado = produtoRepository.buscarPorId(produtoInserido.id);
    //Podemos fazer testes mais simples:
    expect(resultado).toBeDefined();
    expect(resultado.nome).toBe("Feijao")
    });
    //Cenário de exceção - buscarPorId()
    test('Quando buscar por id inexistente, deve retornar undefined', () => {
    const resultado = produtoRepository.buscarPorId(10);
    expect(resultado).toBeUndefined();
    });
