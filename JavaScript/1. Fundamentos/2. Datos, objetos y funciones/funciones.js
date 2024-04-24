function ejemplo(nombre){
    console.log("\nyeiiii " + nombre)
    console.log("Los argumentos que me han llegado lo haya pedido o no son:\n")
    console.log(arguments)

    return 2, 14
}
let dev
let uelto
dev, uelto = ejemplo("Alberto", "arg1", "arg2")
console.log("Recogido: "+ dev + " - " + uelto)
// Solo recoje uno amigo


const funcionEnVariable = function( nombre ) {
    console.log("\nyeiiii desde const " + nombre)
}

funcionEnVariable("Pedro")

let funtFlecha = () => {
    console.log("Flechaaa")
}

funtFlecha()


let funtFlecha2 = nombre => {
    console.log("Flechaaa para "+ nombre)
}

funtFlecha2("Alberto")

let funtFlecha3 = (nombre) => {
    console.log("Flechaaa para "+ nombre)
}

funtFlecha3("Alberto")


// aunque las funciones necesitan especificar un return, las de flecha devuelven su resultado si no conlleva llaves {}
let funF = (a, b) => a + b 

console.log(funF(4, 5))


// El parámetro ... (rest) se va a quedar con un array con todos los argumentos no asociados

let funPuntos = (nombre, ...args) => {
    console.log(nombre)
    console.log(args)
}

funPuntos("Alberto", 123, 234, 345, "Pedro")