"use strict";
(() => {
    /*class Avenger{
      nombre:string;
      equipo:string;
      nombreReal:string;
      puedePelear?:boolean;
      Victorias:number;
  
      constructor(nm:string,tf:string,nr:string,p:boolean,v:number){
        this.nombre=nm;
        this.equipo=tf;
        this.nombreReal=nr;
        this.puedePelear=p;
        this.Victorias=v;
      }
    }*/
    class Avenger {
        constructor(nombre, equipo, nombreReal = 'Confidencial', puedePelear = false, Victorias = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.Victorias = Victorias;
        }
    }
    const antman = new Avenger("Antman", "Cap");
    console.log(antman);
})();
