// 5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:

// Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
// Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
// Implemente os seguintes métodos:

// filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
// buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
// obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.

interface LivroBiblioteca {
    titulo:string
    autor:string
    genero:string
    disponivel:boolean
}
class BibliotecaGestao{

    private livros: LivroBiblioteca[] = []

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[]{
        return this.livros.filter(livro => livro.genero.toUpperCase() === genero.toUpperCase()); 
    }
    buscarPorAutor(autor: string): LivroBiblioteca[]{
        return this.livros.filter(livro => livro.autor.toUpperCase() === autor.toUpperCase());
    }
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.disponivel).sort((a,b) => a.titulo.localeCompare(b.titulo))
    }
}

const biblioteca1 = new BibliotecaGestao();

biblioteca1.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });
biblioteca1.adicionarLivro({ titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false });
biblioteca1.adicionarLivro({ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });
biblioteca1.adicionarLivro({ titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', genero: 'Fantasia', disponivel: true });

console.log('filtrados por genero: ');
console.log(biblioteca1.filtrarPorGenero('fantasia'));
console.log('-------------------------------------------------------------------------------');

console.log('filtrados por autor: ');
console.log(biblioteca1.buscarPorAutor('george orwell'));

console.log('-------------------------------------------------------------------------------');

console.log('Disponiveis e ordenados: ');
console.log(biblioteca1.obterLivrosDisponiveisOrdenados());
