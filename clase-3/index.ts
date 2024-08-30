console.log("Hola mundo desde typescript");

var num:  number = 12;

console.log(num);

function sumar(num1:number, num2:number):number {
    return num1+num2;     
}

console.log(sumar(5,6));

var obj = {
    name: "Jose",
    lastname: "Villacorta",
    age: 36
};

var c: any;
c = true;
c = 15;
c = "hola mundo";

//conversion de tipos
var a = 5;

var str:string = <string> <any> a;
console.log(str);

//
if (true) {
    var x = 5;
}
console.log(x);


function restar(num0:number, num3:number):number {
    var resto = num0 - num3;
    return resto;
}
console.log(restar(5,1));

console.log(a);
console.log(-a);

function calcularImpuesto(monto:number, igv:number=0.18) : number{
    return monto*igv;
}

console.log(calcularImpuesto(100));

var fn = new Function("a", "b", "return a*b");
console.log(fn(5,4));
//CLASES
class book{
    private title: string;
    private author: string;
    private isbn: string;
    public data_published: string;

    constructor(title:string, author:string, isbn:string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.data_published = "29/08/2024";
    }

    showDuebt():void{
        console.log("showDuebt");
    }

    feedBack():void{
        console.log("feedback");
    }

    setTitle(title:string):void{
        this.title = title;
    }
}

var b1 = new book("Mi planta de naraja lima", "Joe Vasconcelos", "ISB-1234567890");
console.log(b1);
//HERENCIA

class Shape{
    area: number;

    constructor(a: number){
        this.area = a;
    }
}

class Circulo extends Shape{
    public radio: number;
    constructor(r:number, a:number=0){
        super(a);
        this.radio = this.radio;
    }

    calcularArea():void{
        this.area = (3.1416 * this.radio* this.radio) /2 ;
    }
}

var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo);

//INTERFACES
interface Ipersona{
    nombre: string;
    apellido: string;
    saludar:()=>string;
}

var cliente:Ipersona = {
    nombre: "Jose",
    apellido: "Villacorta",
    saludar: function(){
        return "Hola" + this.nombre + this.apellido;
    }
}

console.log(cliente.saludar());
cliente.nombre = "Fernando";
console.log(cliente.saludar());


class Usuario implements Ipersona {
    nombre: string;
    apellido: string;
    edad: string;
    sexo: string;

    constructor(nombre:string, apellido:string, sexo:string, edad:number=0) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    saludar():string{
        return "Hi " + this.apellido;
    }
}

var usuario = new Usuario("Alex", "Chang", "Varon", 20);
console.log(usuario);
console.log(usuario.saludar());


interface IPunto2D{
    x:number;
    y:number;
}

function sumarPuntos(p1:IPunto2D, p2:IPunto2D){
    let x = p1.x + p2.x;
    let y = p1.y + p2.y
    return {x:x, y:y};
}

var p1 = {x:0, y:10};
var p2 = {x:5, y:-3};

console.log(sumarPuntos(p1,p2));
