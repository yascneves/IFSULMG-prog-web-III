// Aula 13
// 1) Verifique se um número é positivo, negativo ou zero e exiba uma mensagem apropriada.
// 2) Peça ao usuário para inserir sua idade e, usando o operador ternário, exiba uma mensagem dizendo se ele é maior ou menor de idade.
// 3) Crie um programa que classifique a nota de um aluno (A, B, C, D ou F) com base em sua pontuação, usando a estrutura switch.
// 4) Crie um sistema de login simples, onde o usuário deve inserir seu nome de usuário e senha. Se os dados estiverem corretos, exiba "Login bem-sucedido", caso contrário, exiba "Falha no login".
// 5) Verifique se uma variável contém um valor null ou undefined, e exiba uma mensagem apropriada.

// ex.1
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("Número positivo.");
    } else if (numero < 0) {
        console.log("Número negativo.");
    } else {
        console.log("O número é zero.");
    }
}

// ex.2
let idade = prompt("Digite sua idade:");
let verificaIdade = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(verificaIdade);

// ex.3
let pontuacao = prompt("Digite a pontuação do aluno (0 a 100):");
let nota;

switch (true) {
    case (pontuacao >= 90 && pontuacao <= 100):
        nota = "A";
        break;
    case (pontuacao >= 80 && pontuacao < 90):
        nota = "B";
        break;
    case (pontuacao >= 70 && pontuacao < 80):
        nota = "C";
        break;
    case (pontuacao >= 60 && pontuacao < 70):
        nota = "D";
        break;
    case (pontuacao >= 0 && pontuacao < 60):
        nota = "F";
        break;
    default:
        nota = "Pontuação inválida.";
}

console.log(`Nota do aluno: ${nota}`);

// ex.4
const usernameCorreto = "admin"; //const não muda
const senhaCorreta = "12345";


let username = prompt("Digite seu nome de usuário:");
let senha = prompt("Digite sua senha:");

// Verifica se o nome de usuário e senha estão certos
if (username === usernameCorreto && senha === senhaCorreta) {
    console.log("Login bem-sucedido.");
} else {
    console.log("Falha no login.");
}

// ex.5
let variavel;

if (variavel === null) { // === verifica tudo
    console.log("A variável é null.");
} else if (variavel === undefined) {
    console.log("A variável é undefined.");
} else {
    console.log("A variável não é null nem undefined.");
}
