(function () {
  function activar(quien: string, 
                    momento?:string,
                    objeto: string = "Batiseñal"
                     ) {
                      if(momento){
                        console.log(`${quien} activo la ${objeto} en ${momento}`);
                      }else{
                        console.log(`${quien} activo la ${objeto}`);
                      }
  }
  activar('Gordon','tarde');
  activar('Gordon');
})();
