function main(){
    let num1 = 23
    let num2 = '20'
    
    let r = num1 - num2
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    
    let x = 'hola '
    let y = 'pepe'
    
    console.log(x + y)
    
    r = num1 + Number(num2)// Funcion de casting "Number"(convierte una cadena en numero) solo se necesita cuando utilizamos '+'
    console.log(r)
    console.log(typeof r)//typeof devuelve el tipo de la variable 

    r = num1 - x
    console.log(r)
    console.log(typeof r)
    console.log(isNaN(r))
    if (isNaN(r)){
        console.log('Has conseguido un NaN')
    }
}
main()
