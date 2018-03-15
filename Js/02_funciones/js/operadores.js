//Expresion de asignacion, esta operacion devuelve el valor en x
let x = 25
//Instruccion --> side effect
console.log(x)

//x = x + 1
x++
console.log(x)

//x = x - 1
x--
console.log(x)

//Operadores aritmeticos
x = 27
y = parseInt(x / 5)
console.log(y)
let r = x % 5
console.log(r)

//operadores de asignacion aritmetica
x = 12
x += 4 //x = x + 4
console.log(x)

//Operadores relacionales
x = 12
y = '12'
console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)

if (x === 12){
   console.log('Estoy dentro del if')
}

console.log(!!x)

x = 'abc'
y = 'def'
console.log(x < y)

console.log(x.lenght === y.lenght)//

//Expresion ? true : false
let edad = 32
console.log(edad > 30 ? 'Buenos días' : 'Hola Chaval')




