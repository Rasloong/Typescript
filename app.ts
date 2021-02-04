(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Valor",
  };

  const extraer = ({nombre,clave,poder}:any) => {

    console.log(nombre);
    console.log(clave);
    console.log(poder);
  };
 //extraer(avenger);
  const avengers:string[]=['Thor','Ironman','Spiderman'];

  const[a,b,c]=avengers;
  console.log(a);
  console.log(b);
  console.log(c);
})();
