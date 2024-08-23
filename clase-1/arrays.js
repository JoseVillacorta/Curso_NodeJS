var numbers = new Array(3);
console.log(numbers);
numbers[0] = 1;
numbers[1] = 3;
numbers[2] = 6;
console.log(numbers);

var arreglo = [];
console.log(arreglo);

var arreglo1 = [-1, 50, -34, "Jose", 'M', 9.5, true, false];
console.log(arreglo1);

console.log(arreglo1[5]);
console.log(arreglo1.pop());
console.log(arreglo1);
arreglo.push(null);
console.log(arreglo1);
console.log(arreglo.at(5));
console.log(arreglo1.length);
arreglo1.length = 5;
console.log(arreglo1);

var fecha = "23/08/2024";
var arregloFecha = fecha.split("/");//se parar una cadena
console.log(arregloFecha);
console.log(arregloFecha.join("/"));

var letras = ['a', 'b', 'c', 'd'];
if(Array.isArray(letras)){
    console.log("si es un arreglo");    
}
if(Array.isArray(fecha)){
    console.log("si es un arreglo");
}else{
    console.log("no es un arreglo");
}

console.log(letras.includes("c"));
console.log(letras.indexOf("z"));


