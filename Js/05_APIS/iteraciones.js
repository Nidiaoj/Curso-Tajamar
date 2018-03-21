let aDatos = [2, 5, 7, 4, 9]
let oDatos = {
    alto : 2,
    ancho : 5, 
    largo : 4,
    peso : 9,
    color : 7
}
/* console.log("Array con for")
for (let i = 0; i <aDatos.length; i++){
    const item = aDatos[i]
    console.log(item)
}
console.log("Objeto")
for (const key in oDatos) {
        const item = oDatos[key];
        console.log(item)
        
}
console.log("Array con for in")
for (const i in oDatos) {
    const item = oDatos[i];
    console.log(item)
    
}
console.log("Array con for of")
let i = 0
for (const item of aDatos) {
    console.log(item)
    i ++
    
} */

aDatos = [2, 5, 7, 4, 9]

aDatos.forEach( item =>{console.log(item)})
let aCuadrado = aDatos.map(item => item * item) //map crea una proyección del original
console.log(aCuadrado)

let aPare = aDatos.filter(item => item%2 === 0 )
console.log(aPare)

//cuadrados = (x) => x * x

let aImparesCuadrado = aDatos
.filter(item => item%2 !== 0 )
.map(item => item * item)
console.log(aImparesCuadrado)

let total = aDatos.reduce((prev, item) => prev += item)
console.log(total)
//aDatos.reduceRight()


//aDatos.every()
//aDatos.some()