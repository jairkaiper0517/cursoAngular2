"use strict";
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var resultadoDoble = function (a, b) {
    var resultado = (a + b) * 2;
    console.log(resultado);
    return resultado;
};
resultadoDoble(1, 2);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        console.log(mensaje);
    }
    else {
        mensaje = nombre + " tiene un " + arma;
        console.log(mensaje);
    }
}
;
getAvenger("ironman", "volar");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 0;
        this.altura = 0;
    }
    Rectangulo.prototype.calcularArea = function () {
        var area = this.base * this.altura;
        console.log(area);
    };
    return Rectangulo;
}());
var objRectangulo = new Rectangulo();
objRectangulo.base = 2;
objRectangulo.altura = 2;
objRectangulo.calcularArea();