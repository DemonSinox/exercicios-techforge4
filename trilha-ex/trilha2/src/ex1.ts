// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria{
    titular : string; 
    saldo : number;

    constructor(titular:string, saldo:number ){
        this.saldo = saldo
        this.titular = titular
    }

    depositar(deposito:number){
        this.saldo = this.saldo + deposito
    
        console.log('Voce depositou : '+ depositar+' Seu saldo atual é de: '+this.saldo);
    }

    sacar(sacado:number){
        this.saldo = this.saldo - sacado

        console.log('Voce sacou : '+ sacado+' Seu saldo atual é de: '+this.saldo);
    }
}

let Lucas = new ContaBancaria ('Lucas',3000)

let depositar = 200
let sacar = 364

console.log(Lucas.depositar(depositar));
console.log(Lucas.sacar(sacar));

