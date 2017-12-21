let hulk = {
  nombre: "Bruce",
  smash(){
    setTimeout(() => {
      console.log(this.nombre);
    }, 1500);
  }
}

hulk.smash();
