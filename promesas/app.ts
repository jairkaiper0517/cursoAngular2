let prom = new Promise(function(resolver, regresar){
  setTimeout(()=>{
    console.log("Promesa terminada");
    resolver();
    regresar();
  },1500)
});

prom.then(()=>{
  console.log("Todo salio bien!");
},
()=>{console.log("algo salio mal :(")
  }
);
