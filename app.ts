//aunque en ts marca error por falta de linea en js corre perfectamente
(function(){
   function saludar(nombre){
    console.log('Hola '+nombre);
    
   }
   const wolverine={nombre:'Logan'}
   saludar(wolverine.nombre);
})();

