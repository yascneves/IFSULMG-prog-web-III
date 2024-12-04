// AULA 12

// #1 Crie um array com os números de 1 a 10 e use um loop for para imprimir todos os números pares.
let numeros = [1,2,3,4,5,6,7,8,9,10];
var numerosPares = [];

for (let i=0; i<10;i++){
    let numero = numeros[i];
    if (numero%2 == 0){ 
        // .unshift = Adiciona um elemento ao início de um array
        numerosPares.unshift(numero);
    }
}
console.log(numerosPares);


// #2 Crie uma matriz 3x3 e preencha-a com números inteiros. Escreva um loop que percorra essa matriz e exiba a soma de todos os números.
var soma = 0;

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz[1][1]);

for (let i=0; i<matriz.length;i++){
    for (let j=0; j<matriz.length;j++){

    }
}


// #3 Escreva um programa que peça ao usuário para inserir as notas de um aluno em 3 matérias e armazene-as em uma matriz. 
// Depois, calcule e exiba a média do aluno.
let notaUm = prompt("Insira a 1ª nota: ");
let notaDois = prompt("Insira a 2ª nota: ");
let notaTres = prompt("Insira a 3ª nota: ");
let media = 0;
                                                                                                                                                                                            
let matrizNotas = [
    [notaUm, notaDois, notaTres],
];

for (let i=0; i < matrizNotas.length; i++){
    console.log(media = (matrizNotas[0]+matrizNotas[1]+matrizNotas[2])/3)
};



// 4 Utilize o loop while para criar uma contagem regressiva a partir de 10, imprimindo cada número no console até chegar a 0.
let contagem = [10,9,8,7,6,5,4,3,2,1,0];

for (let item of contagem){
    console.log(item);
}


// 5 Implemente um sistema que simula um questionário com três perguntas, onde o usuário responde "sim" ou "não". 
// Armazene as respostas em um array e, ao final, exiba quantas respostas foram "sim".
let perguntaUm = prompt("Sim (S) ou Não (N)?");
let perguntaDois = prompt("Sim (S) ou Não (N)?");
let perguntaTres = prompt("Sim (S) ou Não (N)?");

let respostas = [
    [perguntaUm, perguntaDois, perguntaTres],
];

for (let item of respostas){
    if (respostas == "S"){
        console.log(respostas[item]);
    }
};




