
(function(){
   function saludar(nombre:string){
    console.log('Hola '+nombre);
    
   }
   const wolverine={nombre:'Logan'}
   let mensaje='yo no fui';
   saludar(wolverine.nombre);
   console.log(mensaje);
   mensaje='hola no me perdi';
   console.log(mensaje);
   let msj:string='hola';
   let numero=1243;
   let boleano=true;//false
   let hoy:Date=new Date();
   let any;
   
   any=msj;
   any=numero;
   any=boleano;
   any=hoy;

   let spiderman={nombre:'Peter',edad:30};
   spiderman={nombre:'miles',edad:14};
})();

