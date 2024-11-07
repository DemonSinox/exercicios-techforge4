// 3 - Cadastro e Busca de Produtos em uma Loja:

// Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
// Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
// Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined

interface ProdutoLoja {
    codigo:number
    nome:string
}
class Loja {
    private produto : ProdutoLoja[] = []  

    adicionarProduto(produto: ProdutoLoja): void {
        this.produto.push(produto);
      }
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produto.find(produto => produto.codigo === codigo);
    }
}

const loja1 = new Loja();

loja1.adicionarProduto({ codigo: 1, nome: 'Produto A' });
loja1.adicionarProduto({ codigo: 2, nome: 'Produto B' });

const produto = loja1.buscarProdutoPorCodigo(1);
if (produto) {
  console.log(`Produto encontrado: ${produto.nome}`);
} else {
  console.log('Produto não encontrado');
}