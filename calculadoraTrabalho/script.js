// Seleciona o visor da calculadora (a parte onde o número e o resultado aparecem)
let display = document.getElementById('display');

// Adiciona um número ao visor quando um botão numérico é pressionado
function appendNumber(number) {
    display.value += number; // Adiciona o número ao valor atual do visor
}

// Adiciona um operador (como +, -, *, /) ao visor
function appendOperator(operator) {
    console.log(display.value + operator);
    // Adiciona o operador somente se o visor não estiver vazio
    if (display.value !== '') {
        display.value += operator;
    }
}

// Adiciona um operador (como +, -, *, /) ao visor no começo
function prependOperator(operator) {
    if (display.value !== '') {
        display.value = operator + display.value;
    }
}

// Função de inverso (1/x)
function englobeFunction(fun) {
    if (display.value !== '' && display.value != 0) {
        display.value = fun + "(" + display.value + ")";
    }
}

// Limpa o visor completamente (usado pelo botão "C")
function clearDisplay() {
    display.value = ''; // Zera o valor do visor
}

// Apaga o último caractere do visor (usado pelo botão de apagar "⌫")
function deleteLast() {
    display.value = display.value.slice(0, -1); // Remove o último caractere
}

// Calcula o resultado da expressão no visor
function calculate() {
    try {
        // Usa eval para calcular a expressão. Exemplo: "3+4*2" vira 11
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro'; // Se houver um erro (ex. expressão inválida), mostra "Erro"
    }
}

// Função de raiz quadrada
function sqrt() {
    if (display.value !== '') {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

// Função de porcentagem (exemplo: 50% de 200 é 100)
function percentage() {
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}

// Função de inverso (1/x)
function inverse() {
    if (display.value !== '' && display.value != 0) {
        display.value = 1 / parseFloat(display.value);
    }
}

// Função de decimal pra binario 
function convertDecimalBinario() {
    if (display.value !== '' && display.value != 0) {
        // Converte a entrada para número inteiro
        const decimal = parseInt(display.value, 10);
        return display.value = decimal.toString(2);
    }
}

// Função de binario pra decimal
function convertBinarioDecimal() {
    if (display.value !== '' && display.value != 0) {
        display.value = parseInt(display.value, 2);
    }
}


// Função de inverso (1/x)
function inverse() {
    if (display.value !== '' && display.value != 0) {
        display.value = 1 / parseFloat(display.value);
    }
}

//eventos de botao
document.addEventListener('keydown', function(e) {
    if (e.key == 0) { appendNumber(0); }
    if (e.key == 1) { appendNumber(1); }
    if (e.key == 2) { appendNumber(2); }
    if (e.key == 3) { appendNumber(3); }
    if (e.key == 4) { appendNumber(4); }
    if (e.key == 5) { appendNumber(5); }
    if (e.key == 6) { appendNumber(6); }
    if (e.key == 7) { appendNumber(7); }
    if (e.key == 8) { appendNumber(8); }
    if (e.key == 9) { appendNumber(9); }

    
    if (e.key == ".") { appendNumber("."); }
    if (e.key == ",") { appendNumber("."); }
    
    if (e.key == "~") { prependOperator("~"); }
    if (e.key == "|") { prependNumber("|"); }
    if (e.key == "&") { prependNumber(""); }
    if (e.key == "/") { appendOperator("/"); }
    if (e.key == "*") { appendOperator("*"); }
    if (e.key == "-") { appendOperator("-"); }
    if (e.key == "+") { appendOperator("+"); }

    if (e.key == "Escape") { clearDisplay(); }
    if (e.key == "Backspace") { deleteLast(); }
    if (e.key == "Enter") { calculate(); }
});


function modulo(x) {
    return Math.abs(x);
}

function sen(x) {
    return Math.sin(x);
}

function cos(x) {
    return Math.cos(x);
}

function tg(x) {
    return Math.tan(x);
}