var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo desde typescript");
var num = 12;
console.log(num);
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(5, 6));
var obj = {
    name: "Jose",
    lastname: "Villacorta",
    age: 36
};
var c;
c = true;
c = 15;
c = "hola mundo";
//conversion de tipos
var a = 5;
var str = a;
console.log(str);
//
if (true) {
    var x = 5;
}
console.log(x);
function restar(num0, num3) {
    var resto = num0 - num3;
    return resto;
}
console.log(restar(5, 1));
console.log(a);
console.log(-a);
function calcularImpuesto(monto, igv) {
    if (igv === void 0) { igv = 0.18; }
    return monto * igv;
}
console.log(calcularImpuesto(100));
var fn = new Function("a", "b", "return a*b");
console.log(fn(5, 4));
//CLASES
var book = /** @class */ (function () {
    function book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.data_published = "29/08/2024";
    }
    book.prototype.showDuebt = function () {
        console.log("showDuebt");
    };
    book.prototype.feedBack = function () {
        console.log("feedback");
    };
    book.prototype.setTitle = function (title) {
        this.title = title;
    };
    return book;
}());
var b1 = new book("Mi planta de naraja lima", "Joe Vasconcelos", "ISB-1234567890");
console.log(b1);
//HERENCIA
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.area = a;
    }
    return Shape;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(r, a) {
        if (a === void 0) { a = 0; }
        var _this = _super.call(this, a) || this;
        _this.radio = _this.radio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        this.area = (3.1416 * this.radio * this.radio) / 2;
    };
    return Circulo;
}(Shape));
var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo);
var cliente = {
    nombre: "Jose",
    apellido: "Villacorta",
    saludar: function () {
        return "Hola" + this.nombre + this.apellido;
    }
};
console.log(cliente.saludar());
cliente.nombre = "Fernando";
console.log(cliente.saludar());
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, sexo, edad) {
        if (edad === void 0) { edad = 0; }
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }
    Usuario.prototype.saludar = function () {
        return "Hi " + this.apellido;
    };
    return Usuario;
}());
var usuario = new Usuario("Alex", "Chang", "Varon", 20);
console.log(usuario);
console.log(usuario.saludar());
function sumarPuntos(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var p1 = { x: 0, y: 10 };
var p2 = { x: 5, y: -3 };
console.log(sumarPuntos(p1, p2));
