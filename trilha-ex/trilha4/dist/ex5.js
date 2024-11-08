"use strict";
// 5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:
class BibliotecaGestao {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero.toUpperCase() === genero.toUpperCase());
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor.toUpperCase() === autor.toUpperCase());
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros.filter(livro => livro.disponivel).sort((a, b) => a.titulo.localeCompare(b.titulo));
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
