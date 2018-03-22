function facturaElem(){
    this.cliente = new factura
    this.impTotal = 0
    this.IVA = 0
    this.Metodopago = []
    this.CalcularTotal = function(){
        let total
        total = (this.precio * this.cantidad)
        return total

    }
    this.mostrarEnPantalla = function(){
    }
   
}
function prod(des, precio, cantidad){
    this.descripcion = des
    this.precio = precio
    this.cantidad = cantidad

}
function factura(nombre, direccion, telefono, nif){
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

let FactCliente = new factura(
    'Pepe', 
    ' C/ Sara', 
    '600028969', 
    '0045689-C')

let FactEmpresa = new factura(
    'CRE', 
    'C/Pinto', 
    '607996781', 
    'A-4235210')

console.log(FactCliente)
console.log(FactEmpresa)


