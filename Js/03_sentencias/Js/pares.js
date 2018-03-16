'use strict'

function comprobarPar(){
    let a = 50
    if ((a % 2) == 0) {
        console.log("El número es par")
    }else{
        console.log("El número es impar")
    }
}
/* Funcion que comprueba si el argumento es par o impar
devolviendo 0, 1 o -1 si el argumento no es un número */
function comprobar(n){
    return isNaN(n / 2) ? -1 : n  % 2

}
function test(){
    console.log(n)
}
comprobarPar()

function mostrarPar(n){
    const aMensajes = [
        `el numero ${n} es par`,
        `el numero ${n} es impar`,
        `el numero ${n} es decimal`,
        ` ${n} no es un número `,

    ]
    //r puede valer 0, 1 o -1
    let r = comprobar(n) 
    r = (r === 2) ? 2 : r
    console.log(aMensajes[r])
 }
 mostrarPar('34')
 function calcularPar(n){
     let r = 0
     if(isNaN(n / 2)){
         r = -1
     }else if (parseInt(n) != (parseFloat(n))) {
         r = 2
     }else {
         r = n%2
     }
     return r
}

function mostrarParCasos (n) {
    let r = calcularPar(n)
    let mensaje
    switch (r){
        case 0 :
        `el numero ${n} es par`
        break
        case 1 :
        `el numero ${n} es impar` 
        break
        case -2 :
        `el dato ${n} no es un numero`
        break
        case -3 :
        `el numero ${n} es decimal`
        break
    }
    console.log(mensaje)
}
mostrarParCasos(13)