"use strict";
// 2 - Crie uma classe base "FormaGeometrica" com um método calcularArea(). Crie classes "Quadrado" e "Circulo" que sobrescrevam este método e retornem a área correta para cada forma.
class FormaGeometrica {
    constructor() {
        this.Pi = 3.14159;
    }
    calcularArea() {
        const pi = this.Pi;
    }
}
class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        let A = this.lado * this.lado;
        console.log(`A area do seu quadrado é ${A}`);
    }
}
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        let A = this.Pi * (this.raio * this.raio);
        console.log(`A area do seu circulo é de ${A}`);
    }
}
let quadrado = new Quadrado(23);
let circulo = new Circulo(10);
circulo.calcularArea();
quadrado.calcularArea();
