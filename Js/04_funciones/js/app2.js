function calcularCuadrado(a){
    a *= a
    return a 
}
//Los paramentros ELEMENTALES pasan por valor

let n = 5
console.log(calcularCuadrado(n))
console.log(n)

//Los parametros REFERENCIA pasan como si fuera por referencia
//Es habitual pasar un clon del objeto
function calcularCubo(params){
    let r 
    r = params.valor = params.valor * params.valor * params.valor 
    return r 
}
params = {valor: 5}
console.log(calcularCubo(JSON.stringify(params)))

params2= Object.assign({},params);
console.log(calcularCubo(params2))
console.log(params)

let oUser = {nombre: 'pepe', apellido: 'Perez'}
console.log(oUser)

let sUser = JSON.stringify(oUser)//Transforma un objeto en string json
let oUser2 = JSON.parse(sUser)
console.log(oUser2)