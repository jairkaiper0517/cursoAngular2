"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "";
        this.equipo = "sin equipo";
        this.nombreReal = "sin nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
exports.Avenger = Avenger;
