//Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().

class Veiculo{
    mover(){
        return `Veico esta se movendo`
    }
}
class Carro extends Veiculo{
    mover(){
        return `O carro está dirigindo`
    }
}
class Bicicleta extends Veiculo{
    mover(){
        return `A bicicleta está pedalando`
    }
}

let carro = new Carro
let bicicleta = new Bicicleta

carro.mover()
bicicleta.mover()
