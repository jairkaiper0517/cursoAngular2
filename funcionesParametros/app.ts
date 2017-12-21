// Parametro obligatorio, defecto y opcional

// NOTA: Parametros obligatorios siempre se definen de primero

function activar(quien:string, objeto:string = "alarma", momento?:string){
  let mensaje:string;

  if(momento){
    mensaje = `${quien} activó la ${objeto} ${momento}`;
  }else{
    mensaje = `${quien} activó la ${objeto}`;
  }

  console.log(mensaje);
}

activar("Jairo", "llave", "cuando llego el agua");
