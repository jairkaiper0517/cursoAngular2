let nombre:string = "Juan";
let apellido:string ="Perez";
let edad:number =32;

console.log("Hola, "+ nombre +" "+apellido +" "+ edad);
// Alt Gr + } = ``
let texto: any = `Hola, ${nombre} ${apellido} ${edad}`;
console.log(texto);

let texto2: any = `${1 + 2}`;
console.log(texto2);
