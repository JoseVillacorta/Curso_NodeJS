
function saludar() {
    console.log("Hola mundo");    
}

console.log("antes de ejecutar el setTimeout");
setTimeout(saludar, 5000);
console.log("despues de ejecutar el setTimeout");

setTimeout(() => {
    console.log("Hola desde setTimeout");    
}, 3000);
console.log("despues de ejecutar el setTimeout 2");
