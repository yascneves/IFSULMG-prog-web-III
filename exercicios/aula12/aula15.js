// Aula 15
// 1) Crie um objeto carro com as propriedades marca, modelo e ano. Depois, adicione a propriedade cor e altere o valor do ano.
// 2) Usando map(), crie um array que armazene o dobro dos valores de um array original.
// 3) Usando filter(), crie um array que armazene apenas os números pares de um array.
// 4) Crie um objeto que tenha um método para calcular o quadrado de um número.
// 5) Usando reduce(), calcule a soma de todos os números de um array.
// 6) Usando spread operator, combine dois arrays em um único array.

// 1
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

carro.cor = "vermelho";
carro.ano = 2021;

console.log(carro);

// 2
let numeros = [1, 2, 3, 4, 5];
let dobro = numeros.map(num => num * 2);

console.log(dobro);


// 3
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(num => num % 2 === 0);

console.log(pares);

// 4
function numQuadrado(numero){
    return n*n;
}

console.log(quadradoNum(5));

// 5
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0); 

console.log(soma);