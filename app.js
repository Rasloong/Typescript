"use strict";
(function () {
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = "Batiseñal"; }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en " + momento);
        }
        else {
            console.log(quien + " activo la " + objeto);
        }
    }
    activar('Gordon', 'tarde');
    activar('Gordon');
})();
