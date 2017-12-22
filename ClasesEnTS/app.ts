export class Avenger {

  nombre:string = "";
  equipo:string = "sin equipo";
  nombreReal:string = "sin nombre";
  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string){

    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;

  }
}

let antman:Avenger = new Avenger("Antman", "ningun equipo", "jose");

console.log(antman);
