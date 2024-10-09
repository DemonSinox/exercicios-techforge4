"use strict";
//1 - Crie variáveis com os seguintes tipos: string, number, boolean e array.
// Faça uma função que receba dois números e retorne a soma. Dica: Use a tipagem explícita nos parâmetros da função.
let nome = "Lucas Henrique Vieira";
let idade = 19;
let feliz = true;
let musicasDoMomento = ["Vertigo", "i was only temporary", "Escape"];
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(" Nome : " + nome, " Idade : " + idade, " feliz : " + feliz, " musica que esta ouvindo mais no momento : " + musicasDoMomento, "soma do numero com a idade = " + soma(idade, 18));
