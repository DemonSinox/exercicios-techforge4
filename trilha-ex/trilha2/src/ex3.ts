// Crie uma classe Produto com os atributos nome (string), preço (number) 
// e quantidade (number). Adicione um método para calcular o valor total 
// em estoque (preço * quantidade).

class Produto {
    nome : string;
    preco : number;
    quantiedade : number;
    
    constructor(nome:string,preco:number,quantiedade:number){
    this.nome = nome
    this.preco = preco
    this.quantiedade = quantiedade
    }

    valorEstoque(){
        return `Valor total do estoque é de ${this.preco * this.quantiedade}`
    }
}

let produto = new Produto ('mouse',160,52)

console.log(produto.valorEstoque());
