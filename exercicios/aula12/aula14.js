// Aula 14
// 1- Crie uma função que receba dois números e retorne o maior deles.
// 2) Crie uma função que calcule o fatorial de um número.
// 3) Crie uma função que verifique se um número é par ou ímpar.
// 4) Crie uma função que converta temperaturas de Celsius para Fahrenheit.
// 5) Crie uma função que receba um array de números e retorne a média desses números.
// 6) Crie uma função que receba uma string e retorne o número de vogais presentes nela.
// 7) Crie uma função que verifique se um número é primo.
// 8) Crie uma função que receba um número e retorne os números da sequência de Fibonacci até esse número.

// 1
function maiorNumero(a, b) {
    return a > b ? a : b;
}
console.log(maiorNumero(a, b));


// 3
function parImpar(n) {
    return n % 2 === 0 ? "Par" : "Ímpar";
}
console.log(parOuImpar(5));


// 4
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusParaFahrenheit(20));



//6
function contarVogais(str) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("aiueoppp"));



