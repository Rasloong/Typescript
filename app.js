"use strict";
(function () {
    function saludar(nombre) {
        console.log('Hola ' + nombre);
    }
    var wolverine = { nombre: 'Logan' };
    var mensaje = 'yo no fui';
    saludar(wolverine.nombre);
    console.log(mensaje);
    mensaje = 'hola no me perdi';
    console.log(mensaje);
})();
