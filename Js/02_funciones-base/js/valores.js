
//Elementales
//number, string y boolean

let x = 12
let y = 2 * x//Asignacion de valor
x = x + 2

console.log(y)//24
console.log(x)//14

//Los objetos o datos referenciados como su nambre lo indica se manipulan por referencia

let o1 = {valor : 12}
let o2 = o1//Asiganacion de referencia--> 'o1' y 'o2' estan apuntanado al mismo objeto
o1.valor = 24

console.log(o1)//valor : 24
console.log(o2)//valor : 12