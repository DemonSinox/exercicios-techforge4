// 1 - Crie uma classe Cachorro com os atributos nome (string), raça (string) e idade (number). Adicione um método
// que calcule a idade do cachorro em "anos de cachorro" (1 ano humano = 7 anos de cachorro).

class Cachorro{
    // Atributos
    nome: string ;
    raca: string;
    idade: number;

    //Construtor 
    constructor (nome: string, raca: string, idade: number){
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    //Metododo
    AnosSeFosseHumano(): string {
        return `Se o Cachorro fosse humano ele teria ${this.idade* 7} anos de idade `;
    }
}

let MeuDog = new Cachorro ('Kayke','CortaGiro',4)

console.log(MeuDog.AnosSeFosseHumano());
