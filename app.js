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
    var msj = 'hola';
    var numero = 1243;
    var boleano = true; //false
    var hoy = new Date();
    var any;
    any = msj;
    any = numero;
    any = boleano;
    any = hoy;
    var spiderman = { nombre: 'Peter', edad: 30 };
    spiderman = { nombre: 'miles', edad: 14 };
})();
