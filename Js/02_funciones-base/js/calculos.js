'use strict'
// a y b son argumentos

function sumar(a, b) {
	var c = a + b
	
	return c
}
function restar(a, b) {
	var c = a - b
	return c
}
function mostrar (r){
	console.log("El resultado es: ", r)
}

// paso 2 parametros
var x = 123;
var y = 14;
var r = sumar(x, y);
mostrar(r);

console.log("El resultado es: ", sumar (123, 34));
mostrar(sumar(23, 45));
mostrar(sumar(2, 5));

var x = 123;
var y = 14;
var r = restar(x, y);
mostrar(r);

sumar()

mostrar(restar(523, 52));
mostrar(restar(52, 52));
mostrar(restar(53, 5));