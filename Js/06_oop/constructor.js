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
    
let libro2 = new libro(
    'William gibson', 
    'Neuromate', 
    'Minotauro', 
    new Date('1980'), 
    ['SciFi'])

//Siempre se puede modificar cualquier objeto
libro2.propietario = 'Vero'

console.log(libro1)
console.log(typeof libro2)

console.log(libro2)
console.log(typeof libro2)
console.log(libro2.constructor.name)

