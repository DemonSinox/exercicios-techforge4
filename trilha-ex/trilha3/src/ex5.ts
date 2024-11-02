//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.

class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus(tipo: string): number {
        if (tipo === "Gerente") {
            return this.salario * 0.10;
        } else if (tipo === "Operario") {
            return this.salario * 0.05;
        }
        return 0;
    }

    calcularSalarioComBonus(tipo: string): number {
        return this.salario + this.calcularBonus(tipo);
    }
}

const gerente = new Funcionario("Alice", 5000);
const operario = new Funcionario("Bob", 3000);

console.log(`Salário do Gerente com bônus: ${gerente.calcularSalarioComBonus("Gerente")}`);
console.log(`Salário do Operário com bônus: ${operario.calcularSalarioComBonus("Operario")}`);