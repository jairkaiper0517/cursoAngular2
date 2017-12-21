"use strict";
// MODO OBSERVADOR SE COLOCA -w
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
