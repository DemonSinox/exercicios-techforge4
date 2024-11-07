// 2 - Documentos

// Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
// Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".

interface Documentos{
    titulo:string
    conteudo:string
    exibir(): string
}

class Texto implements Documentos{
    public titulo:string
    public conteudo: string

    constructor(titulo:string,conteudo:string){
        this.conteudo = conteudo
        this.titulo = titulo
    }
    
    exibir(): string {
        return ` Titulo ${this.titulo} , conteudo ${this.conteudo}`
    }
}

const texto = new Texto('lata de monster','energetico')

console.log(texto.exibir());
