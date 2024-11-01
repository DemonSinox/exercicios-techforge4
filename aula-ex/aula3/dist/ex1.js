"use strict";
//1 - Crie uma classe base "Veiculo" com os atributos marca e modelo, e um método detalhes. Crie uma classe derivada "Moto" 
//que sobrescreva o método detalhes para incluir o número de cilindradas.
class Veiculo {
    constructor(placa, cilindrada) {
        this.cilindrada = cilindrada;
        this.placa = placa;
    }
    detalhes() {
        console.log(`Plca do veiculo é ${this.placa} com ${this.cilindrada}`);
    }
}
class Moto extends Veiculo {
    constructor(modelo, placa, cilindrada) {
        super(placa, cilindrada);
        this.modelo = modelo;
    }
    detalhes() {
        super.detalhes();
        console.log('sendo seu modelo' + this.modelo);
    }
}
let moto = new Moto("CG 160", 983723, 160);
moto.detalhes();
