function casting(){
    let num1: number = 23
let num2: number = '20'

let r = num1 - num2
console.log(r)
console.log(typeof r)
console.log(typeof num2)

let x = 'hola '
let y = 'pepe'

console.log(x + y)

r = num1 + Number(num2)// 43 Funcion de casting "Number"(convierte un estring en number) solo se necesita con el +
console.log(r)
console.log(typeof r)
}
