function point (param) {
    this.x = param.x || 0
    this.y = param.y || 0
    this.r = param.r || 1
    this.calcularCircunf = function(){},
    this.calcularCirculo= function(){},
    this.calcularCirOtro = function(){},
    this.calcularMas = function(){}
}
p1 = new point({x:2, y:3, r:5})
p1.calcularCirOtro()
p1.calcularCirculo()


function app(param){}

app = new app({user: 'Pepe'})