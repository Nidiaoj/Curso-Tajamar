(function(){

    appMayu = {
        cadena : '',
        codigo : 0,
        aMensajes : [
            'Se mezclan mayúculas y minúsculas',
            'Todas las letras son mayúsculas',
            'Todas las letras son minúsculas'
        ],
        Comprobar : function (){
                let r = 0
                if (this.cad.toUpperCase() === this.cad){//Todo en mayúscula 
                    r = 1
                } else if (this.cad.toLowerCase() === this.cad){//Todoa en minúscula
                    r = 2
                } 

                return r
        },
            mostrar:  function (){
                let sMensaje = `
                En la frase ${this.cad}
                ${this.aMensajes[this.Comprobar()]}`
                console.log(sMensaje)
        }
    }
    appMayu.cad= 'HOLA PEPE'
    appMayu.mostrar()

    appMayu.cad= 'hola pepe'
    appMayu.mostrar()

    appMayu.cad= 'HOla Pepe'
    appMayu.mostrar()
})()




