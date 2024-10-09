//2 - Crie um type chamado Endereco que contenha os campos rua, número e cidade. 
//Depois, crie uma função que recebe um objeto Endereco e retorne uma string formatada com as informações.

interface Endereco {
    cidade : string
    rua : string
    numero : number
}

let endereco1 : Endereco ={
    cidade : "Campo Mourão",
    rua : "r.araruna",
    numero : 2531
}

console.log(endereco1.rua+", "+endereco1.numero+" - "+endereco1.cidade);
