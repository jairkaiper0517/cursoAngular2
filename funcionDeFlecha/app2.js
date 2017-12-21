"use strict";
var hulk = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre);
        }, 1500);
    }
};
hulk.smash();
