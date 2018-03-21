
//aDatos es una instancia de array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5)
console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = Array(5, 23, 21, 5)
console.log(aDatos3)

let oDatos = {
    //new Object()
}

let dni
let code = dni % 23
let aLetras = [' A ','B','C','D','E','F']
aLetras[code]

console.log(aLetras.length)

//Esxisten dos métodos de Arrays:
//- Inmutables
//- Mutables

//console.log(aLetras.join(''))
//console.log(aLetras)
aLetrasOriginal = aLetras.slice(0, aLetras.length)// -->"slide" Método inmutable. No modifica el array original
aLetras.sort()
console.log('Copia No sort',aLetrasOriginal)
aLetras.reverse()
console.log('Reverse', aLetras)

//Método mutable
let aNuevo = aLetras.splice(0, 5,"C", "D") //"splice" Modifica el valor original del array.
console.log(aNuevo)
console.log(aLetras)


//Mutables
aLetras.push("")//añadir al final
aLetras.unshift("")//añadir al principio
aLetras.pop()//quitar ultimo
aLetras.shift()//quitar primero