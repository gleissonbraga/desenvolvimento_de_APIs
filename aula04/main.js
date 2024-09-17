// const repository = require("./repository/produto_repository.js")

import repository from "./repository/produto_repository.js";

function main() {
    repository.inserir({nome:"Arroz", categoria:"Alimento", preco:4.7});
    repository.inserir({nome:"Suco de Laranja", categoria:"Bebida", preco:7.5});
    repository.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    repository.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    console.log(repository.listar());

    console.log("Produto [id=2]: ", repository.buscarPorId(2));

    console.log("Produtos da categoria Alimento", repository.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", repository.pesquisarPorNomeLike("a"));

    repository.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4})

    repository.deletar(7);

    console.log(repository.listar());
}

main();