"use strict";
(function () {
    var mifuncion = function (a) {
        return a.toUpperCase();
    };
    var miflecha = function (a) { return a.toUpperCase(); };
    console.log(mifuncion("Normal"));
    console.log(miflecha("Flecha"));
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(5, 5));
    console.log(sumarF(7, 5));
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        },
    };
    hulk.smash();
})();
