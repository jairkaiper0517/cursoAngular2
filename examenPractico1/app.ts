
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Superheroe {
    nombre:string,
    artesMarciales:string[];
}

let batman:Superheroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}



// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }

let  resultadoDoble = (a:number, b:number)=>{
    let resultado:number = (a+b)*2;
    console.log(resultado);
    return resultado;
}

resultadoDoble(1,2);

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     console.log(mensaje);
  }else{
     mensaje = nombre + " tiene un " + arma
     console.log(mensaje);
  }
};

getAvenger("ironman","volar");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
  base:number =0;
  altura:number=0;

  calcularArea(){
    let area:number = this.base*this.altura;
    console.log(area);
  }
}

let objRectangulo = new Rectangulo();
objRectangulo.base = 2;
objRectangulo.altura = 2;
objRectangulo.calcularArea();
