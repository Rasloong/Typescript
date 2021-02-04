(function () {
  const mifuncion = function (a: string) {
    return a.toUpperCase();
  };
  const miflecha = (a: string) => a.toUpperCase();

  console.log(mifuncion("Normal"));
  console.log(miflecha("Flecha"));

  const sumarN = function (a: number, b: number) {
    return a + b;
  };
  const sumarF = (a: number, b: number) => a + b;

  console.log(sumarN(5, 5));
  console.log(sumarF(7, 5));

  const hulk = {
    nombre: "Hulk",
    smash() {
      setTimeout( () => {console.log(`${this.nombre} smash!!!`);
      }, 1000);
    },
  };
  hulk.smash();
})();
