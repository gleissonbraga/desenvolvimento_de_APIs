let listaProdutos = [];
let idGerador = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = idGerador++;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    /*for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto;
        }
    }*/
    return (listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    ));
}

function atualizar(id, produto) {
    /*let indiceProduto = -1;
    for(let indice in listaProdutos) {
        if(produto.id == id){
            indiceProduto = indice;
        }
    }
    if(indiceProduto == -1) return;
    //alterar o produto direto
    listaProdutos[indiceProduto] = produto;*/

    let indiceProduto = listaProdutos.findIndex(function(produto) {
        return (produto.id == id);
    })

    if(indiceProduto == -1) return;
    //alterar o produto direto
    listaProdutos[indiceProduto] = produto;
}

function deletar(id) {
    let indiceProduto = listaProdutos.findIndex(function(produto) {
        return (produto.id == id);
    })
    if(indiceProduto == -1) return;
    listaProdutos.splice(indiceProduto, 1);
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter( (produto) => produto.categoria == categoria )
}

function pesquisarPorNomeLike(nome) {
    return listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    })
}

export default  {
    listar, 
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
}