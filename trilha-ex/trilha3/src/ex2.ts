//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

class FormaGeometrica {
    protected Pi: number = 3.14159;

    calcularArea(): string {
        return "Metodo calcularArea nao implementado.";
    }
}

class Quadrado extends FormaGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): string {
        const A = this.lado * this.lado;
        return `A area do seu quadrado e ${A}`;
    }
}

class Circulo extends FormaGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): string {
        const A = this.Pi * (this.raio * this.raio);
        return `A area do seu circulo e ${A}`;
    }
}

class Triangulo extends FormaGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): string {
        const A = (this.base * this.altura) / 2;
        return `A area do seu triangulo e ${A}`;
    }
}

function imprimirAreas(figuras: FormaGeometrica[]): string[] {
    return figuras.map((figura) => figura.calcularArea());
}

const figuras: FormaGeometrica[] = [
    new Quadrado(5),
    new Circulo(10),
    new Triangulo(6, 4)
];

let areas = imprimirAreas(figuras);
console.log(areas);
