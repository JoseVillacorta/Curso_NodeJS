function saludar(nombre) {
    console.log("Hola, " + nombre);    
}

saludar("Jose");
//----------------------------------------
function suma(valor1, valor2) {
    let suma = valor1 + valor2;
    return suma;
    //return valor1+valor2;
}

var resultado = suma(10, 45);
console.log(suma(15, 10));
console.log(resultado);
//----------------------------------------
function esMayor(num1, num2) {
    return num1 > num2;    
}

console.log(esMayor(10, 6));
console.log(esMayor(5, 15));

//----------------------------------------
function dividir(num1, num2) {
    if (num2!=0) {
        return num1/num2;
    } else {
        console.log("no se puede realizar la division");
        return NaN;
    }
}

console.log(dividir(10, 5));
console.log(dividir(5, 0));
