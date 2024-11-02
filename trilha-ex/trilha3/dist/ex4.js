"use strict";
//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
class Animal {
    constructor() {
        this.energia = 100;
    }
    comer(incremento) {
        this.energia += incremento;
    }
    statusEnergia() {
        return `Energia: ${this.energia}`;
    }
}
class Leao extends Animal {
    caçar() {
        this.comer(-30);
        this.comer(50);
    }
    statusEnergia() {
        return `Leão - ${super.statusEnergia()}`;
    }
}
class Passaro extends Animal {
    seAlimentar() {
        this.comer(20);
    }
    statusEnergia() {
        return `Pássaro - ${super.statusEnergia()}`;
    }
}
const leao = new Leao();
leao.caçar();
console.log(leao.statusEnergia());
const passaro = new Passaro();
passaro.seAlimentar();
console.log(passaro.statusEnergia());
