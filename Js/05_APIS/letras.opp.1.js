
appMayu = {
   cadena : '',
   codigo : 0,
   aMensajes : [
    'Se mezclan mayúculas y minúsculas',
    'Todas las letras son mayúsculas',
    'Todas las letras son minúsculas'
   ],
   aCadenas : [
    'HOLA PEPE',
    'hola pepe',
    'Hola Pepe'

   ],
   Comprobar : function (){
        if (this.cad.toUpperCase() === this.cad){//Todo en mayúscula 

            this.codigo = 1
        } else if (this.cad.toLowerCase() === this.cad){//Todoa en minúscula
            this.codigo = 2
        } else {
            this.codigo = 0        
        } 

   },
    mostrar:  function (){
        this.Comprobar()    
        let sMensaje = `
            En la frase "${this.cad}"
            ${this.aMensajes[this.codigo]}`
        console.log(sMensaje)

        
    },
    probar : function(){
        for (let i = 0; i < this.aCadenas.length; i++) {
            this.cad = this.aCadenas[i];
            this.mostrar()
            
        }
    }
    
}

appMayu.probar()
appMayu.cad = 'Un anillo...'
appMayu.mostrar()





