/** @function : Comprobar si la cadena es:
 * - Todo mayúsculas (1)
 * - Todo minúsculas (2)
 * - Mezclas de ambos (0)
 * @param : string
 * @returns : number
  */


function ComprobarMayu(cad = ''){
    let r = 0
    if (cad.toUpperCase() === cad){//Todo en mayúscula 
        r = 1
    }else if (cad.toLowerCase() === cad){//Todoa en minúscula
        r = 2
    }/* else {//Mezclado
        
    } */

   return r
}

/* console.log(ComprobarMayu('HOLA PEPE'))
console.log(ComprobarMayu('hola pepe'))
console.log(ComprobarMayu('Hola Pepe')) */

function mostrar (cad){
    aMensajes = [
        'Se mezclan mayúculas y minusculas',
        'Todas las letras son mayusculas',
        'Todas las letras son minusculas'
    ]
    let sMensaje = `
    En la frase ${cad}
    ${aMensajes[ComprobarMayu(cad)]}`
    console.log(sMensaje)
}
 mostrar('HOLA PEPE')
 mostrar('hola pepe')
 mostrar('HOLA Pepe')