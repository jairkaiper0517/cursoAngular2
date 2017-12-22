"use strict";
var prom = new Promise(function (resolver, regresar) {
    setTimeout(function () {
        console.log("Promesa terminada");
        resolver();
        regresar();
    }, 1500);
});
prom.then(function () {
    console.log("Todo salio bien!");
}, function () {
    console.log("algo salio mal :(");
});
