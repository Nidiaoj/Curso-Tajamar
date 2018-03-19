{
    let libro = {
        título: '',
        autor: '',
        editorial: '',
        fecha: 0,
        géneros: [],
    }

    let libro1 = Object.create(libro)
    let libro2 = Object.create(libro)

    libro1.Autor = ' J. R. R. Tolkien'
    libro1.titulo = 'El señor de los anillos'
    libro1.Editorial = 'Minotauro'
    libro1.Fecha = '1954'
    libro1.Géneros = ['Fantasia']

    libro2.Autor = ' Willian Gibson'
    libro2.titulo = 'El señor de los anillos'
    libro2.Editorial = 'Minotauro'
    libro2.Fecha = '1954'
    libro2.Géneros = ['Fantasia']

    console.log(libro1)
    console.log(libro2)
}
{
    let libro1 = {
        título: 'El señor de los anillos',
        autor: 'J. R. R. Tolkien',
        editorial: 'Minotauro',
        fecha: 1954,
        generos: ['Fantasia'],
    }

    let libro2 = {
        título: 'Neuromante',
        autor: 'Willian Gibson',
        editorial: 'Minotauro',
        fecha: 1980,
        primera_edicion : {
            editorial : 'Acme',
            fecha : 1980,
        },
        generos: ['SciFi', 'Cyberpunk'],
    }

    //let user = 'pepe'
    libro1.presonajes = []

/*     console.log(`El autor es: ${libro2.título}`)
    console.log(`El autor del libro 2 es: ${libro2.autor}`)
    console.log(libro1.fecha)
    console.log(libro2.generos[0])
    console.log(typeof libro2.generos[0])
    console.log(`La editorial de la primera edicion es: ${libro2.primera_edicion.editorial}`) */

    for (let key in libro1) {
        console.log(`La clave ${key} vale: `, libro1[key])// "key" es un iterador que va cambiando de valor en cada vuelta.("libro.autor, libro.titulo...")
        libro1[key];
            
    }
}

