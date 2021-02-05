"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject("No Tienes Fondos Suficientes");
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1500).then(montoActual => console.log(`Quedan ${montoActual}`))
        .catch(err => console.error(err));
})();
