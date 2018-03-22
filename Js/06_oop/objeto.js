//let oDatos = new Object() = {}
let libro1 = {
    //Atributos
    título: 'El señor de los anillos',
    autor: 'J. R. R. Tolkien',
    editorial: 'Minotauro',
    fecha: new Date ('1954'),
    generos: ['Fantasia'],
    mostrarReferancia : function(){
        let ref = this.autor + `. `
        ref += '"' + this.título + `". `
        ref += this.editorial + `. ` + this.fecha.getFullYear() + `. `
        console.log(ref)
    
    } 
 
}

libro1.mostrarReferancia() 
let miFuncion = function(){
    console.log('soy una función')
    console.log(this)
}
miFuncion()//Patron de invocación Function
let o = {head: 'Soy un objeto',
         metodo: miFuncion
}
//o.metodo()
let oNuevoObjeto = new miFuncion()

let obj = {head: 'Soy un objeto',}
miFuncion.call(obj)
