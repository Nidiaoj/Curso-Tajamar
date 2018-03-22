function libro(titulo = '', 
               autor = '', 
               editorial = '', 
               fecha = new Date(0), 
               generos = []) {
    //Atributos
    this.titulo = titulo,
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos
    this.mostrarRef = function(){
        let ref = this.autor + `. `
        ref += '"' + this.título + `". `
        ref += this.editorial + `. ` + this.fecha.getFullYear() + `. `
        console.log(ref)
    
    } 

}

/* libro()
console.log(autor) */

let libro1 = new libro (
    //Atributos
    'El señor de los anillos',
    'J. R. R. Tolkien',
    'Minotauro',
    new Date ('1954'),
    ['Fantasia'],)

console.log(libro1.mostrarRef())

    
let libro2 = new libro(
    'William gibson', 
    'Neuromate', 
    'Minotauro', 
    new Date('1980'), 
    ['SciFi'])

console.log(libro2.mostrarRef())
