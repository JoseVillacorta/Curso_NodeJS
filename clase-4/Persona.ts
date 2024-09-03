import {IsDate, IsEmail, Length, Max, Min, validate } from "class-validator"

class Persona {
    @Length(2,10)
    nombre: string;
    @Length(5, 20)
    apellido: string;
    @Min(1)
    @Max(99)
    edad: number;
    @IsDate()
    fecha_nacimiento: Date;
    @IsEmail()
    email: string;
    celular:string;
}

var p = new Persona();
p.nombre = "Jose";
p.apellido = "Villacorta";
p.edad = 21;
p.fecha_nacimiento = new Date("02/17/2003");
p.email = "villacorta@gmail.com";
p.celular = "975940833";

validate(p).then(errors => {
    if (errors.length>0) {
        console.log("Hay errores de validacion", errors);        
    }else{
        console.log("No hay errores de validacion");        
    }
});


