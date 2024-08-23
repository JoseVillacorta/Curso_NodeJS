//while
var num = 1;
console.log("antes del while");
while (num<10) {
    console.log("dentro del while "+num);
    num++;
}
console.log("despues del while");

//do-while
var num1 = 1;
console.log("antes del do-while");
do {
    console.log("dentro del do-while "+num1);
    num1++;    
} while (num1<10);
console.log("despues del do-while");

//for
var num2=10;
console.log("antes del for ");
for (let i = 0; i < num; i++) {
    console.log("dentro del for "+i);
}
console.log("despues del for ");

//for in
var arreglo1 = [-1, 50, -34, "Jose", 'M', 9.5, true, false];
console.log(arreglo1);
console.log("antes del for-in");
for( elemento in arreglo1){
    console.log(arreglo1[elemento]);
}
console.log("despues del for-in");