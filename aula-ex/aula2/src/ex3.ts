// 3 - Crie uma classe Cidade com os atributos nome (string), população (number), área (number) e ano de fundação (number). 
// Adicione um método para calcular a densidade populacional (população / área), e outro método para
// calcular a idade da cidade. A classe deve estar encapsulada

class Cidade{

    private nome : string;
    private populacao : number;
    private area : number;
    private anoDeFundacao : number;

    constructor (nome : string, populacao : number, area : number, anoDeFundacao : number){
        this.nome = nome;
        this.area = area;
        this.populacao = populacao;
        this.anoDeFundacao = anoDeFundacao;
    }

    setNome(nome:string){
        this.nome = nome;
    }
    setPopulacao(populacao:number){
        this.populacao = populacao;
    }
    setArea(area:number){
        this.area = area;
    }
    setAnoDeFundacao(anoDeFundacao:number){
        this.anoDeFundacao = anoDeFundacao;
    }
    getNome(){
        return this.nome;
    }
    getArea(){
        return this.area;
    }
    getPopulacao(){
        return this.populacao;
    }
    getAnoDeFundacao(){
        return this.anoDeFundacao;
    }

    densidadeDemografica(){
    return this.populacao / this.area;
    }
    
    idadeCidade(){
    return 2024 - this.anoDeFundacao;
    }
}

let CampoMourão = new Cidade ('Campo Mourão', 99.432, 749637 ,1947)

console.log('A densidade demografica de '+CampoMourão.getNome()+ ' é de ' +CampoMourão.densidadeDemografica()+ ' pessoas');
console.log('Idade de '+CampoMourão.getNome()+ ' é de ' +CampoMourão.idadeCidade()+' anos ');


