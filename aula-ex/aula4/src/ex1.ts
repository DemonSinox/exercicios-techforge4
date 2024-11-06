//1 - Crie uma interface chamada Veiculo que tenha as seguintes propriedades: marca, modelo, e um método acelerar(velocidade: number):
//void. Em seguida, implemente essa interface em duas classes: Carro e Moto. Ambas as classes devem implementar a interface Veiculo

interface Veiculo{
  marca:string
  modelo:string
  acelerar(velocidade:number) : void;
}

class Moto implements Veiculo{
  public marca: string;
  public modelo: string;

  constructor(marca:string,modelo:string){
    this.marca = marca
    this.modelo = modelo
  }

  acelerar(velocidade: number): void {
    console.log(`VRUM VRUM a ${velocidade} km/h`);
  }
}
class Carro implements Veiculo{
  public marca: string;
  public modelo: string;

  constructor(marca:string,modelo:string){
    this.marca = marca
    this.modelo = modelo
  }

  acelerar(velocidade: number): void {
    console.log(`VRUM VRUM a ${velocidade} km/h`);
  }
}
const carro = new Carro('nissan','SkyLine R34 2002')
const moto = new Moto('Honda','Cb160')
carro.acelerar(238746);
moto.acelerar(160);