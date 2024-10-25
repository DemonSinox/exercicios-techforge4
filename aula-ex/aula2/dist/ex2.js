"use strict";
// - Crie uma classe Retangulo com os atributos largura (number) e altura (number). 
// Adicione métodos para calcular a área, o perímetro, e exibir as informações do 
// retângulo. A classe deve estar encapsulada. 
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    setLargura(largura) {
        this.largura = largura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getLargura() {
        return this.largura;
    }
    getAltura() {
        return this.altura;
    }
    area() {
        let area = this.altura * this.altura;
        return `Este retangulo tem a area de ${area}`;
    }
    perimetro() {
        let perimetro = 2 * (this.altura + this.largura);
        return `Este retangulo tem o perimetro de ${perimetro}`;
    }
}
let meuRetangulo = new Retangulo(30, 10);
console.log(meuRetangulo.perimetro());
console.log(meuRetangulo.area());
