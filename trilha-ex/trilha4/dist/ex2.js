"use strict";
// 2 - Documentos
class Texto {
    constructor(titulo, conteudo) {
        this.conteudo = conteudo;
        this.titulo = titulo;
    }
    exibir() {
        return ` Titulo ${this.titulo} , conteudo ${this.conteudo}`;
    }
}
const texto = new Texto('lata de monster', 'energetico');
console.log(texto.exibir());
