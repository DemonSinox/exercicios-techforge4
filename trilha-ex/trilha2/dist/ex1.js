"use strict";
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    constructor(titular, saldo) {
        this.saldo = saldo;
        this.titular = titular;
    }
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
        console.log('Voce depositou : ' + depositar + ' Seu saldo atual é de: ' + this.saldo);
    }
    sacar(sacado) {
        this.saldo = this.saldo - sacado;
        console.log('Voce sacou : ' + sacado + ' Seu saldo atual é de: ' + this.saldo);
    }
}
let Lucas = new ContaBancaria('Lucas', 3000);
let depositar = 200;
let sacar = 364;
console.log(Lucas.depositar(depositar));
console.log(Lucas.sacar(sacar));
