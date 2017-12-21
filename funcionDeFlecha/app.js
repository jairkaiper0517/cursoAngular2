"use strict";
// normal
var miFuncion = function (a) {
    return a;
};
console.log(miFuncion("Normal"));
// flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncionF("Flecha"));
// normal
var miFuncion2 = function (a, b) {
    return a + b;
};
console.log(miFuncion2(1, 2));
// Flecha
var miFuncionF2 = function (a, b) { return a + b; };
console.log(miFuncionF2(1, 5));
// Normal
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// flecha 
var miFuncionF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
