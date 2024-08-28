let persona = {
    'nombre': "Jose",
    'apellido': "Villacorta",
    'edad': 21,
    'sexo': 'M',
    'celular': 96689468,

    direccion: {
        departamento: "La libertidad",
        provincia: "Pacasmayo",
        distrito: "Guadalupe"
    },
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
};

console.log(persona);

console.log(persona.nombreCompleto());
console.log(persona.direccion);
//agregar
persona.direccion.zip = 18016;
console.log(persona.direccion);
//eliminar
delete persona.direccion.zip;
console.log(persona.direccion);

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

    set sexo(param){
        this.nombre = "Sra/Sr " + this.nombre;
    }

    get sexo(){
        console.log("La persona no tiene sexo definido");
        
    }

}

for(propiedad in persona){
    console.log(persona[propiedad]);
}

let p1 = new Persona("Piero", "Verastegui", "Guadalupe", "15/08/2001");
console.log(p1);

dir = {
    departamento: "La libertidad",
    provincia: "Chepne",
    distrito: "Chepen"
}

persona.direccion = dir;
console.log(persona);


function saludar(){
    console.log("hola mundo");
}

saludar();
saludar.descripcion  = "esta funciona saluda";

console.log(saludar);

function  otraFuncion(fn) {
    fn();    
}

otraFuncion(saludar);



var a = 20;
var b = 10;
console.log(a);
console.log(b);
b=a;
console.log(b);

var a = 20;
console.log(a);
function cambiarValor(param){
    a = param;
}
cambiarValor(30);
console.log(a);


for (let keys in p1){
    console.log(keys);
}

console.log(p1.sexo);

console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(Object.entries(p1));

