let libro1 = {
    //Atributos
    título: 'El señor de los anillos',
    autor: 'J. R. R. Tolkien',
    editorial: 'Minotauro',
    fecha: 1954,
    generos: ['Fantasia'],
    //Propiedades
    mostrarReferancia: function(){//Encapsulamiento de los métodos.
        let ref = this.autor + `. `
        ref += '"' + this.título + `". `
        ref += this.editorial + `. ` + this.fecha + `. `
        console.log(ref)
    
    }
}

/* libro1.mostrarReferancia = function(){//Encapsulamiento de los métodos.
    let ref = this.autor + `. `
    ref += '"' + this.título + `". `
    ref += this.editorial + `. ` + this.fecha + `. `
    console.log(ref)

} */
libro1.mostrarReferancia()

let x = 'Pepe'
isNaN(x)
console.log(isNaN(x))

//Wrapper object -->
console.log(x.length)
console.log(x.toUpperCase())

let sFrase = 'Un anillo para controlar a todos'
let aDatos = sFrase.split(' ')
console.log('split ',aDatos)
let nuevaFrase = aDatos.join('')
console.log('junto: ',nuevaFrase)

