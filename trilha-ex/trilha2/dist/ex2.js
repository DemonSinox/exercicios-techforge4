"use strict";
// Crie uma classe Livro com os atributos título (string), autor (string),
// páginas (number) e lido (boolean). Adicione um método para marcar o 
// livro como lido.
class livro {
    constructor(titulo, autor, paginas, lido) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    foiLido() {
        console.log('Este livro foi lido');
        this.lido = true;
    }
}
const George_Orwell = new livro("1984", "George Orwell", 328, false);
console.log(George_Orwell.foiLido());
