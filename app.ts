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
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal: string='Confidencial',
      public puedePelear: boolean = false,
      public Victorias: number = 0
    ) {}
  }
  const antman = new Avenger("Antman", "Cap");

  console.log(antman);
})();
