interface Xmen{
  nombre:string,
  poder:string
}


let objWolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneracion"
};

function enviarMision(xmen: Xmen){
  console.log(`Enviando a: ${xmen.nombre}`);
}


function enviarCuartel(xmen: Xmen){
  console.log("Enviando al cuartel: "+xmen.nombre);
}

enviarMision(objWolverine);
enviarCuartel(objWolverine);
