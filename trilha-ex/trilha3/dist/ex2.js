"use strict";
//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.
class FormaGeometrica {
    constructor() {
        this.Pi = 3.14159;
    }
    calcularArea() {
        return "Metodo calcularArea nao implementado.";
    }
}
class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        const A = this.lado * this.lado;
        return `A area do seu quadrado e ${A}`;
    }
}
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        const A = this.Pi * (this.raio * this.raio);
        return `A area do seu circulo e ${A}`;
    }
}
class Triangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        const A = (this.base * this.altura) / 2;
        return `A area do seu triangulo e ${A}`;
    }
}
function imprimirAreas(figuras) {
    return figuras.map((figura) => figura.calcularArea());
}
const figuras = [
    new Quadrado(5),
    new Circulo(10),
    new Triangulo(6, 4)
];
let areas = imprimirAreas(figuras);
console.log(areas);
