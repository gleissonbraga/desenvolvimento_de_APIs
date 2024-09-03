let produtos = []
let idGerador = 1

function listar(){
    return produtos
}

function inserirProduto(produto) {
    produto.id = idGerador++
    produtos.push(produto)
}

function buscarPorId(id){
    for(let produto of produtos){
        if(produto.id == id){
            return produto
        }
    } 
}

function main() {
    inserirProduto({nome: "Arroz", categoria: "Alimento", preco: 4.7, id: 1})
    inserirProduto({nome: "Suco de Laranja", categoria: "Bebida", preco: 7.5, id: 2})
    inserirProduto({nome: "Feijão", categoria: "Alimento", preco: 6.5, id: 3})
    inserirProduto({nome: "Coca cola", categoria: "Bebida", preco: 8.9, id: 4})
    console.log(listar())

    console.log("Produto [id=2]: ", buscarPorId(2))
}

main()

