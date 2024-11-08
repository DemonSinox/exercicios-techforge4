"use strict";
// 4 - Sistema de Biblioteca com Checagem de Disponibilidade:
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livros) {
        this.livros.push(livros);
    }
    buscarLivrosDisponiveis() {
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
