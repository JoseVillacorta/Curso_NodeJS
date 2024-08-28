//Hallar el valor mayor y menor de un arreglo

//Creamos nuestro arreglo
var numeros = [9, 16, 1, 10, 11, 140, 2, 45, 7, 64];

//valor minimo
var min = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]<min)
        min = numeros[i];
}

//varlo maximo
var max = numeros[0];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > max)
        max = numeros[i];
}

console.log("El valor maximo es: " + max);
console.log("El valor minimo es: " + min);


// Segunda forma en encontrar
console.log(numeros);

var mayor = -99999;
var menor = 99999;

for (let i of numeros) {
    if (i > mayor) {
        mayor = i;
    } 
    if(i < menor){
        menor = i;
    }    
}

console.log("El valor maximo es: " + mayor);
console.log("El valor minimo es: " + menor);