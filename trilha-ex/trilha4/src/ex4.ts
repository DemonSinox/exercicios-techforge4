// 4 - Sistema de Biblioteca com Checagem de Disponibilidade:

// Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
// Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
// Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 

interface Livro {
    titulo:string
    autor:string
    disponivel:boolean
}
class Biblioteca{

    private livros: Livro[] = []

    adicionarLivro (livros: Livro): void{
        this.livros.push(livros)
    }
    buscarLivrosDisponiveis(){
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', disponivel: true });
biblioteca.adicionarLivro({ titulo: '1984', autor: 'George Orwell', disponivel: false });
biblioteca.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', disponivel: true });
biblioteca.adicionarLivro({ titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log('Livros Disponíveis:');

livrosDisponiveis.forEach(livro => {
  console.log(`${livro.titulo} de ${livro.autor}`);
});
