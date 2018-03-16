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

//operadores de asignacion  '=' y asignacion aritmetica '+='
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

// operador ternario, es otra manera de escribir un 'if'
//Expresion ? true : false
let edad = 32
console.log(edad > 30 ? 'Buenos días' : 'Hola Chaval')

let a = 12
let b = 2
let c = 4

if(a > b || a < c){
    console.log("Comprobado")
}

/* {let a = {valor : 5}

    if(typeof d || d.valor === 5){
        console.log("Comprobado el 5")
    }
} */





