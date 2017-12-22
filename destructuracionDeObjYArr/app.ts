let avenger = {
  nombre: "Steve",
  clave: "Capitan america",
  poder: "Droga"
}

// objeto
let {nombre:nombreAvenger, clave:claveAvenger, poder:poderAvenger} = avenger;
console.log(nombreAvenger, claveAvenger, poderAvenger);


// arreglo
let avengerej2:string[] =["Thor", "Steve", "Tony"];

let {["0"]:avenger1, ["1"]:avenger2, ["2"]:avenger3,  } = avengerej2;
console.log(avenger1, avenger2, avenger3);


let [avenger11, avenger22, avenger33] = avengerej2;
console.log(avenger11,avenger22,avenger33);
