
function calcularFact(n){

     let fact = 1
     for( let i = n; i >= 1 ; i--){
        fact *= i
    }  
    return fact   
     
}
console.log(calcularFact(5))
console.log(calcularFact(170))

function mostrar(n){
    let mensaje = `El factorial de ${n} es: `
    mensaje += calcularFact(n)
    console.log(mensaje) 
}
mostrar(34)
