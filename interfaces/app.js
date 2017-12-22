"use strict";
var objWolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
enviarMision(objWolverine);
enviarCuartel(objWolverine);
