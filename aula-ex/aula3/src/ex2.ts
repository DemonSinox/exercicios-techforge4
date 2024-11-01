// 2 - Crie uma classe base "FormaGeometrica" com um método calcularArea(). Crie classes "Quadrado" e "Circulo" que sobrescrevam este método e retornem a área correta para cada forma.

class FormaGeometrica{
    protected Pi:number = 3.14159

    calcularArea(){
        const pi = this.Pi;
    }
}
class Quadrado extends FormaGeometrica{
    private lado:number;

    constructor(lado:number){
        super()
        this.lado = lado;
    }

    calcularArea(){
        let A = this.lado * this.lado
        console.log(`A area do seu quadrado é ${A}`)
    }
}
class Circulo extends FormaGeometrica{
    private raio:number;
    
    constructor(raio:number){
        super()
        this.raio = raio;
    }

    calcularArea(){
        let A = this.Pi * (this.raio * this.raio);
        console.log(`A area do seu circulo é de ${A}`);
    }
}

let quadrado = new Quadrado(23)
let circulo = new Circulo(10)

circulo.calcularArea()
quadrado.calcularArea()