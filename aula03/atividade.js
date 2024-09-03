
const produtos = []

class Produto {
    constructor( nome, categoria, preco){
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
    }

    updateName(attribute) {
        this.nome = attribute
    }

    updateCategoria(categoria) {
        this.categoria = categoria
    }

    updatePrice(preco) {
        this.preco = preco
    }
}

function addProduct(nome, categoria, preco) {
    const element = new Produto(nome, categoria, preco)
    produtos.push(element)
}

function showProduct(array){
    for (let index = 0; index < array.length; index++) {
        console.log(`ID: ${index}  - Nome: ${array[index].nome} - Categoria: ${array[index].categoria} - Preço: ${array[index].preco}`)
    }
}

function findProduct(array, id){
    for (let index = 0; index <= array.length; index++) {
        if(id === index) {
            console.table(array[index])
        } 
    }
}

function deleteProduct(array, id){
    for (let index = 0; index <= array.length; index++) {
        if(id === index) {
            array.splice(array[index],1)
        } 
    }
}

function updateProductName(array, id, set) {
    for (let index = 0; index <= array.length; index++){
        if(id === index) {
            array[index].updateName(set)
        } 
    }
}

function updateProductCategoria(array, id, set) {
    for (let index = 0; index <= array.length; index++){
        if(id === index) {
            array[index].updateCategoria(set)
        } 
    }
}

function updateProductPrice(array, id, set) {
    for (let index = 0; index <= array.length; index++){
        if(id === index) {
            array[index].updatePrice(set)
        } 
    }
}

function searchByCategory(array, category){
    array.forEach(element => {
        if(element.categoria === category){
            console.log(`${element.nome}, ${element.categoria}, ${element.preco}`)
        }
    });
}



addProduct("Coca Cola", "Bebida", "9.99")
addProduct("Fanta Laranja", "Bebida", "6.99")
addProduct("Fandangos", "Salgadinho", "7.99")



updateProductName(produtos, 1, "Fanta Uva")
updateProductCategoria(produtos, 1, "Chocolate")
updateProductPrice(produtos, 1, 15.50)
showProduct(produtos)
updateProductCategoria(produtos, 1, "Bebida")
console.log("-----------------")


searchByCategory(produtos, "Salgadinho")

