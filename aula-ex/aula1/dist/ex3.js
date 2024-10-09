"use strict";
//3 - Crie uma função chamada filtrarNumeros que recebe um array com valores de tipos mistos (string, number, boolean) 
//e retorna apenas os números. Use a tipagem correta para os parâmetros e retorno da função.
function filtrarNumeros(array) {
    let numeros = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numeros.push(array[i]);
        }
    }
    return numeros;
}
const array = [2354, "2424", true, 9, 23];
console.log("numeros filtrados são :" + filtrarNumeros(array));
