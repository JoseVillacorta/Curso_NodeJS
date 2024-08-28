//Crear un objeto con 5 propiedades y 3 métodos. (menos Persona, Carro, Animal, Figura)

let computadora = {
    'modelo': 'Halion',
    'procesador': 'xxxxx',
    'tarjeta_grafica': 'zzzzz',
    'disco_almacenamiento': 'ccccc',

    modeloCompleto: function(){
        return this.modelo + " " + this.procesador + " " + this.tarjeta_grafica + " " + this.disco_almacenamiento;
    },
};

console.log(computadora);
console.log(computadora.modeloCompleto());
