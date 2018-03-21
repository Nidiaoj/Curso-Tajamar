
let ayer = new Date(2018, 2, 20, 1)
console.log(ayer)

let hoy = new Date()
console.log(hoy)

let unDia = new Date(1234567879486)
console.log(unDia)

console.log(hoy.getFullYear())
console.log(hoy.getDay())
console.log(hoy.getTime())

console.log( parseInt((hoy - ayer) / (1000*60*60)))