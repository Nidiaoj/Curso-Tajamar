//Una funcion es un bloque de codigo que podemos ejecutar al momento de invocarla
//Declaracion de una función:
//Hiting de la funcion
function mostrar(n){
    console.log(`Me han pasado ${n}`)

}
//Invocación de una función
mostrar('pepe')

//Creados por el constructor function

//Funcion === objeto
//Funcion anónima:
//Asignacion de una funcion en una variable
let mostrarVariable = function(n){
    console.log(`Me han pasado ${n}`)
}
mostrarVariable('Juan')