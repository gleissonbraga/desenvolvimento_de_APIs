// const produtoRepository = require("./repository/produto_repository.js")
const produtoService = require("./service/produto_service")

function main() {
    try {
        produtoService.inserir({ nome: "Arroz", categoria: "Alimento", preco: "5.00" })
        
    } catch (err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.inserir({ nome: "Feijao", categoria: "Alimento", preco: "8.00" })

    } catch (err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.inserir({ nome: "Feijao", categoria: "Alimento", preco: "8.00" })

    } catch (err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.inserir({ nome: "Suco", categoria: "Bebida", preco: "3.00" })

    } catch (err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.inserir({ nome: "Massa", preco: "2.00" })

    } catch (err) {
        console.log("Erro", err.msg)
    }
    
    try {
        console.log(produtoService.buscarPorId(100))
    } catch(err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.atualizar(2, {nome: "Feijão", categoria: "Alimento", preco: '10.00'})
    } catch (err) {
        console.log("Erro", err.msg)
    }

    try {
        produtoService.deletar(3)
    } catch (err) {
        console.log("Erro", err.msg)
    }
    
    console.log(produtoService.listar())
}

main();



