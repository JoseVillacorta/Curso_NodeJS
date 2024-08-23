let persona = {
    'nombre': "Jose",
    'apellido': "Villacorta",
    'edad': 21,
    'sexo': 'M',
    'celular': 96689468,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
};

console.log(persona);

console.log(persona.nombreCompleto());


class Persona {
    nombre;
    apellido;
    direccion;
    fechaNacimiento;
    
    constructor(nombre, apellido, direccion, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar() {
        return "hola";
    }
}

for(propiedad in persona){
    console.log(persona[propiedad]);
}

let p1 = new Persona("Piero", "Verastegui", "Guadalupe", "15/08/2001");
console.log(p1);
