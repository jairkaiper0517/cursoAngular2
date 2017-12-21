"use strict";
// Parametro obligatorio, defecto y opcional
// NOTA: Parametros obligatorios siempre se definen de primero
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "alarma"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Jairo", "llave", "cuando llego el agua");
