"use strict";
//aunque en ts marca error por falta de linea en js corre perfectamente
(function () {
    function saludar(nombre) {
        console.log('Hola ' + nombre);
    }
    var wolverine = { nombre: 'Logan' };
    saludar(wolverine.nombre);
})();
