"use strict";
// 1 - Produtos
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const loja = new ItemLoja(1, 'escova', 9.99);
console.log('id: ', loja.id, 'nome:', loja.nome, 'preço: ', loja.preco);
