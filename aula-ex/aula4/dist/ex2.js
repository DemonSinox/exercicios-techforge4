"use strict";
//2 - Crie uma interface Funcionario com as propriedades nome, cargo, salario, e o método trabalhar(). Crie uma interface Gerente que herde de Funcionario e adicione o método supervisionar(). Implemente ambas as interfaces em classes concretas (FuncionarioComum e GerenteDeProjetos). Crie um array com funcionários de ambos os tipos e percorra-o, chamando os métodos adequados dependendo do tipo de funcioná
class FuncionarioComum {
    constructor(nome) {
        this.cargo = 'FuncionarioComum';
        this.salario = 1412;
        this.nome = nome;
    }
    trampa() {
        console.log(`${this.nome} está trampando como Funcionario Comum.`);
    }
}
class GerenteDeProjetos {
    constructor(nome) {
        this.cargo = 'Gerente de Projetos';
        this.salario = 7500;
        this.nome = nome;
    }
    trampa() {
        console.log(`${this.nome} está trampando como Gerente de Projetos.`);
    }
    supervisionar() {
        console.log(`${this.nome} está supervisionando a equipe.`);
    }
}
const funcionarios = [
    new FuncionarioComum('Carlos'),
    new GerenteDeProjetos('Ana'),
    new FuncionarioComum('Mariana'),
    new GerenteDeProjetos('Roberto')
];
for (const funcionario of funcionarios) {
    funcionario.trampa();
    if ('supervisionar' in funcionario) {
        funcionario.supervisionar();
    }
}
