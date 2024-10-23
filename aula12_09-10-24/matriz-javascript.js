let fruta = ["banana", "maça", "uva", "melão", "jabuticaba"];

for (i = 0; i in fruta; i++){ //i in frutas = i < frutas.length
    console.log(fruta[i])
}

for (let item of fruta){
    console.log(item);
}

for (let i of j){
    console.log(i)
}

// while (){

// }

// do{
//     while(){

//     }
// }
 
let matriz = [["a"], ["b"], ["c"], ["d"]];
for (let i=0; i < matriz.length; i++){
    for (let j=0; j < matriz[i].length; j++){
        console.log('Elemento na posição [${i}][${j}]:', matriz[i][j]);
    }
}

let notas = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
];

for (let i=0; i < notas.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        console.log(media = (notas[0]+notas[1]+notas[2])/3)
    }
}
// let alunos = [["A"]]
// let disciplinas = [[""],[""]]
