"use strict";
(function () {
    var avenger = {
        nombre: "Steve",
        clave: "Capitan America",
        poder: "Valor",
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave, poder = _a.poder;
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    //extraer(avenger);
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var a = avengers[0], b = avengers[1], c = avengers[2];
    console.log(a);
    console.log(b);
    console.log(c);
})();
