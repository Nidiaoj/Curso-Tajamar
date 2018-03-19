'use strict'
//Es6 existen let y const con ambito {}

function mostrar() {
    const X = 2
    {
        const X = 23   
    }
    console.log(X)
}
function calcularCircunferencia(radio){
    return 2 * Math.PI * radio
}
function mostrarCircunferencia(radio){
    let cir = calcularCircunferencia(radio)
    console.log(`
             La circunferencia es ${radio} tiene longitud ${cir}
           `)
}

const X = 5
mostrar()
mostrarCircunferencia(5)

