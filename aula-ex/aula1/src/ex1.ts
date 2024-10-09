//1 - Crie variáveis com os seguintes tipos: string, number, boolean e array.
// Faça uma função que receba dois números e retorne a soma. Dica: Use a tipagem explícita nos parâmetros da função.


let nome : string = "Lucas Henrique Vieira";
let idade : number = 19;
let feliz : boolean = true;
let musicasDoMomento : string[] = ["Vertigo","i was only temporary","Escape"];


function soma (numero1 : number, numero2 : number){
    return numero1 + numero2
}

console.log(
    " Nome : "+ nome,
    " Idade : "+ idade,
    " feliz : "+ feliz,
    " musica que esta ouvindo mais no momento : "+ musicasDoMomento,
    "soma do numero com a idade = "+ soma (idade,18)

);

