"use strict";
// 3 - Cadastro e Busca de Produtos em uma Loja:
class Loja {
    constructor() {
        this.produto = [];
    }
    adicionarProduto(produto) {
        this.produto.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produto.find(produto => produto.codigo === codigo);
    }
}
const loja1 = new Loja();
loja1.adicionarProduto({ codigo: 1, nome: 'Produto A' });
loja1.adicionarProduto({ codigo: 2, nome: 'Produto B' });
const produto = loja1.buscarProdutoPorCodigo(1);
if (produto) {
    console.log(`Produto encontrado: ${produto.nome}`);
}
else {
    console.log('Produto não encontrado');
}
