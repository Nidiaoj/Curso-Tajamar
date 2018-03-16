
const userPepe = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 17,
    isCasado : false,
    aflicciones : ['Papiroflexia'],
    genero : 'M',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    }
}
const userMaria = {
    nombre : 'María',
    apellido : 'Lopez',
    edad : 53,
    isCasado : true,
    aflicciones : ['Lectura'],
    genero : 'F',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    }
}
const MAYORIAEDAD = 18
function crearSaludo (user) {
    let mensaje = 'Hola '

    if (user.edad >= MAYORIAEDAD && user.genero == 'M'){
        mensaje += 'D. '
    }else if (user.edad >= MAYORIAEDAD && user.genero == 'F') {
        mensaje += 'Dña. '

    } 
    mensaje  += user.nombre// mensaje = mensaje + user.name
    if ( user.isCasado ) {
        if (user.genero == 'M') {
            mensaje  += '. Saldudos a tu mujer'
    
        }else {
            mensaje  += '. Saldudos a tu marido'
        }
        
    }
    return mensaje

}
function saludar(user) {
    console.log(crearSaludo(user))
}

function saludarHtml(user) {
    document.write(crearSaludo(user)+ '<br>')
}

saludar(userMaria)
saludar(userPepe)
saludarHtml(userMaria)
saludarHtml(userPepe)


if ( 1 ) {}
else {}

if ( 1 ) {}
else if ( 2 ) {}
else if ( 3 ) {}
else {}