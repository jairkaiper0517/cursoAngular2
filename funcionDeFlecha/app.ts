// normal
let miFuncion = function(a:string){
  return a;
}
console.log(miFuncion("Normal"));

// flecha
let miFuncionF = (a:string) => a;
console.log(miFuncionF("Flecha"));


// normal
let miFuncion2 = function(a:number,b:number){
  return a+b;
}
console.log(miFuncion2(1,2));

// Flecha
let miFuncionF2 = (a:number,b:number) => a+b;
console.log(miFuncionF2(1,5));

// Normal
let miFuncion3 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}

// flecha 
let miFuncionF3 = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}
