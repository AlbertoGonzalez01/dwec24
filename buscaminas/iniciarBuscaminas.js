function dibujarTableroHTML(tamañoTablero, arrayBombas){
    var tableroHTML ="<table class='tabla'>"
    for(let i=0; i<tamañoTablero;i++){
        tableroHTML+="<tr>"
        for(let j=0;j<tamañoTablero;j++){
            tableroHTML+="<td class='vacio'>"
            if(verificarBomba(arrayBombas, j+1, i+1)){
                tableroHTML+="<button class='bomba' onclick='miFunc()'></button>"
            }else{
                tableroHTML+="<button class='vacio' onclick='miFunc()'></button>"
            }
            tableroHTML+="</td>"
        }
        tableroHTML+="</tr>"
    }
    tableroHTML+="</table>"
    return tableroHTML
}

function colocarBombas(tamañoTablero, numBombas){
    //var arrayBombas=new Map()
    var arrayBombas=[]
    for(let i=0;i<numBombas;i++){
        num1=(Math.floor(Math.random() * tamañoTablero))+1
        num2=(Math.floor(Math.random() * tamañoTablero))+1
        console.log(num1, num2)
        if(arrayBombas.includes([num1, num2])){
            console.log("repetido")
            i--}
        else{
            console.log("no repetido")
            arrayBombas.push([num1, num2])
        }
        // if(arrayBombas.has(num1) && arrayBombas.get(num1)==num2){
        //     console.log("repetido")
        //     i--
        // }else{
        //     console.log("no repetido")
        //     arrayBombas.set(num1, num2) //usamos un map para guardar clave valor(x, y)
        // }
        arrayBombas.push([num1, num2])
        // document.getElementsByTagName("td")[num1*10+num2].setAttribute("class","bomba")
    }
    return arrayBombas
}

function verificarBomba(arrayBombas, x, y){
    if(arrayBombas.has(x) && arrayBombas.get(x)==y){
        return true
    }else{
        return false
    }
}
// dificultad facil=25% bombas
// dificultad media=35% bombas
// dificultad dificil=50% bombas
// calcularNumMinas( x , y ){
//     for(let i=0;i<x;i++){
//         for(let j=0;j<y;j++){
            
//         }
//     }
//     num1=Math.floor(Math.random() * x)
//     num2=Math.floor(Math.random() * y)
// } 