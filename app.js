"use strict";
(() => {
    const enviarMision = (sujeto) => {
        console.log(`Enviando a ${sujeto.nombre} a la mision`);
    };
    const RegresarMision = (sujeto) => {
        console.log(`Enviando a ${sujeto.nombre} a la mision`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 30
    };
    enviarMision(wolverine);
})();
