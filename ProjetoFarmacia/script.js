// let pessoa = {
//     nome: "Yasmim",
//     dataNasc: 2024,
// };

// let carro = [

//     carro1 = {
//         nome0: "Corsa",
//         cor0: "Preto",
//         ano0: 2002,
//         ipva0: "sim",
//     },

//     carro2 = {
//     nome1: "Fusca",
//     cor1: "Azul",
//     ano2: 1991,
//     ipva2: "sim",
//     },

//     carro3 = {
//         nome2: "Celta",
//         cor2: "Preto",
//         ano2: 2002,
//         ipva2: "sim",
//     },
    
//     carro4 = {
//         nome3: "Civic",
//         cor3: "Preto",
//         ano3: 2023,
//         ipva3: "sim",
//     },
    
//     carro5 = {

//         nome4: "206",
//         cor4: null,
//         ano4: null,
//         ipva4: null
        
//     }
// }
// ]

// console.log("teste");

// for (let chave in carro){
//     console.log(chave+": " +carro[chave]);
// }

// for (i=0; carro.length;i++){
//     console.log(i+": "+carro[i]);
// }

// map() reescreve uma array
let numeros = [1,2,3,4,5];
let dobrados = numeros.map(num => num*2);
let parImpar = numeros.map(num => num%2 === 0 ? "par" : "impar");
let numPar = numeros.map(num => num%2 === 0 ? num : ""); //


console.log(numeros);
console.log(dobrados);
console.log(parImpar);
console.log(numPar);

// filter() cria outro array com base em um outro array existente
let idade = [15,22,17,30,40];
let maioresDeIdade = idade.filter(idade => idade >= 18);
let menoresDeIdade = idade.filter(idade => idade < 18);

console.log(maioresDeIdade);
console.log(menoresDeIdade);

// 

let nota = [5,6,7,10,2,3,4,5];

let soma = 0;
for (i=0; i<3;i++){
    soma += nota[i];
}

let soma2 = 0;
for (j=i; j<8;j++){
    soma2 += nota[j];
}



console.log(soma/4);
console.log(soma2/4);

// 

let num = [15,22,17,30,40];
let nPar = num.filter(par => par%2 === 0);

console.log(nPar);

//

let numeroReduce = [1,2,3,4,5];
let soma3 = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma3);


