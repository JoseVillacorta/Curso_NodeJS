function saludar() {
    console.log("Hola");    
    return "mundo";
}
console.log(saludar());

saludar = function () {
    console.log("otro saludo");    
}

console.log(saludar());

function funcion2(arg, fn) {
    fn(arg);
}

function saludar2(nom) {
    console.log("Hola "+nom);
}

// Inmediately Invoked Function Expression - IIFE
(function () {
    console.log("estoy dentro de una funcion");    
})();
