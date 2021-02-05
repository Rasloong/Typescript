(() => {

  interface Xmen{
    nombre:string
    edad:number;
    poder?:string;
  }

  const enviarMision=(sujeto:Xmen)=>{
    console.log(`Enviando a ${sujeto.nombre} a la mision`);
  }

  const RegresarMision=(sujeto:Xmen)=>{
    console.log(`Enviando a ${sujeto.nombre} a la mision`);
  }
  const wolverine:Xmen={
    nombre:'Logan',
    edad:30
  }
  enviarMision(wolverine);
})();
