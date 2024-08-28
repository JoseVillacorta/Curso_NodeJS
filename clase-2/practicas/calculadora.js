const prompt = require("prompt-sync")();

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function modulo(num1, num2) {
    return num1 % num2;
}
function potencia(num1, num2) {
    return num1**num2;
}

var num1 = prompt("Ingrese un numero: ");
var num2 = prompt("Ingrese un numero: ");
var operacion = prompt("Ingrese operacion(+,-,*,/,%,**): ");

num1 = Number(num1);
num2 = Number(num2);

var resultado = 0;
switch (operacion) {
    case '+':
        resultado = sumar(num1,num2);
        break;
    case '-':
        resultado = restar(num1,num2);
        break;
    case '*':
        resultado = multiplicar(num1,num2);
        break;
    case '/':
        resultado = dividir(num1,num2);
        break;
    case '%':
        resultado = modulo(num1,num2);
        break;
    case '**':
        resultado = potencia(num1,num2);
        break;        
    default:
        console.log("Operacion no valida");
        resultado = undefined;        
        break;
}

if (resultado !== undefined) {
    console.log("El resultado es: " + resultado);
}



