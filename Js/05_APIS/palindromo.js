function comprobarPalindromo(frase = ''){

    let fraseArray = frase.split(' ')
    let fraseJo = fraseArray.join('')

    let nArray = fraseJo.split('')
    console.log('Nuevo array ',nArray)

    let fraseRev = nArray.reverse()
    console.log('Array reverse ',fraseRev)

    //frase = frase.toLowerCase().split(" ").join("")
    //console.log(frase)
    let comprobar = true

    for (let i = 0; i < nArray.length; i++) {
         if(nArray[i] != fraseRev[i]){
             comprobar = false
        }
       
    }
    if(comprobar = false){
        console.log(" NO es palindromo")
    }else{
        console.log("Es palindromo")
    }

}


comprobarPalindromo('no deseo ese don')