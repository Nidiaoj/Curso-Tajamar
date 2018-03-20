function calcularCuadrado(a){
    a *= a
    return a 
}
function calcularCubo(a){
    a = a * a * a
    return a 
}

function mostarCalculo(n, f){
    console.log(`El resulatado es ${f(n)}`)
    return f(n)

}
let n = 5
mostarCalculo(n, calcularCuadrado)
console.log(mostrarCalculo(n, calcularCubo))
console.log(mostrarCalculo(n, function(){
    return n * 2
}))
setTimeout(function(){
    console.log(calcularCubo(n))
}, 3000)
for (let i = 0; i < 10000; i++) {
    console.log(i)
    
}
let y = {nombre: 'Pepe'}
conconsole.log(typeof y)

function main () {
    let mostrarResultado2 = function (){
        console.log(calcularCubo(n))
    }
}