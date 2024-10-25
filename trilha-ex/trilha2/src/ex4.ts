// Crie uma classe Temperatura com um atributo valor (number em Celsius). 
// Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura{
    celsius : number

    constructor(celssius : number){
        this.celsius = celssius
    }

    cFahrenheit(){
        return `a conversão para Fahrenheit é ${1.8*this.celsius+32}F`
    }
    cKelvin(){
        return `a conversão para Kelvin é ${this.celsius+273}K`
    }
}
let temperatura = new Temperatura(36)

console.log(temperatura.cFahrenheit());
console.log(temperatura.cKelvin());