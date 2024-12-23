// 1 - Produtos

// Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
// Em seguida, crie uma classe ItemLoja que implemente essa interface.
// No construtor da classe, atribua valores às propriedades id, nome e preco.

interface Produto{
    id:number
    nome:string
    preco:number
}

class ItemLoja implements Produto{
    public id:number
    public nome:string
    public preco:number

    constructor(  id:number,nome:string,preco:number){
        this.id = id
        this.nome = nome
        this.preco = preco
    }

}

const loja = new ItemLoja (1,'escova',9.99)

console.log('id: ',loja.id,'nome:',loja.nome,'preço: ',loja.preco);
