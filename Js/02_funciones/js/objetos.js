//Objeto literal
let user = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 23,
    isCasado : false,
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    }
}
console.log(typeof user)

user.cargo = "CEO"
console.log(user)

//Otros tipos de objetos

//Array-->conjunto de propiedades que se indexan numericamente

let aDatos = [12, 23, 45, 45, 87]
let aDatoschungo = [12, 'pepe', true, null, undefined]
console.log(aDatos[1])

aDatos[15] = 30
console.log(aDatos)

aUsuarios = [
    {
        nombre : 'Pepe',
        apellido : 'Perez',
        edad : 23,
        isCasado : false,
        direccion : {
            calle : '',
            ciudad : '',
            c_postal : ''
        }
    },
    {
        nombre : 'Pepe',
        apellido : 'Perez',
        edad : 23,
        isCasado : false,
        direccion : {
            calle : '',
            ciudad : '',
            c_postal : ''
        }
    },
    {
        nombre : 'Pepe',
        apellido : 'Perez',
        edad : 23,
        isCasado : false,
        direccion : {
            calle : '',
            ciudad : '',
            c_postal : '',
        }
    }
]
console.log(typeof aUsuarios)
console.log(Array.isArray(aUsuarios))

//Object
//Undefined
//String
//Number
//Boolean

//FUnction, Method, Constructor

let fecha = new Date()
let exp = new RegExp()
let error = new Error()

//Math.cos(90)
//JSON.parse()
