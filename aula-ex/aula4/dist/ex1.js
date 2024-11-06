"use strict";
//1 - Crie uma interface chamada Veiculo que tenha as seguintes propriedades: marca, modelo, e um método acelerar(velocidade: number):
//void. Em seguida, implemente essa interface em duas classes: Carro e Moto. Ambas as classes devem implementar a interface Veiculo
class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(velocidade) {
        console.log(`VRUM VRUM a ${velocidade} km/h`);
    }
}
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(velocidade) {
        console.log(`VRUM VRUM a ${velocidade} km/h`);
    }
}
const carro = new Carro('nissan', 'SkyLine R34 2002');
const moto = new Moto('Honda', 'Cb160');
carro.acelerar(238746);
moto.acelerar(160);
