//2 - Crie uma interface Funcionario com as propriedades nome, cargo, salario, e o método trabalhar(). Crie uma interface Gerente que herde de Funcionario e adicione o método supervisionar(). Implemente ambas as interfaces em classes concretas (FuncionarioComum e GerenteDeProjetos). Crie um array com funcionários de ambos os tipos e percorra-o, chamando os métodos adequados dependendo do tipo de funcioná

interface Funcionario{
    nome:string
    cargo:string
    salario:number
    trampa() : void; 
}
interface Gerente extends Funcionario{
    supervisionar(): void;
}

class FuncionarioComum implements Funcionario {
    public nome:string
    public cargo = 'FuncionarioComum'
    public salario = 1412

    constructor (nome:string){
        this.nome = nome;
    }

    trampa(): void {
        console.log(`${this.nome} está trampando como Funcionario Comum.`);
      }
}

class GerenteDeProjetos implements Gerente {
    public nome: string;
    public cargo = 'Gerente de Projetos';
    public salario = 7500;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    trampa(): void {
      console.log(`${this.nome} está trampando como Gerente de Projetos.`);
    }
  
    supervisionar(): void {
      console.log(`${this.nome} está supervisionando a equipe.`);
    }
}

const funcionarios: Funcionario[] = [
    new FuncionarioComum('Carlos'),
    new GerenteDeProjetos('Ana'),
    new FuncionarioComum('Mariana'),
    new GerenteDeProjetos('Roberto')
];

for (const funcionario of funcionarios){

    funcionario.trampa();

    if ('supervisionar' in funcionario){
        (funcionario as Gerente).supervisionar();
    }
}