const x = 5, y = 6    //Constante normal y corriente
const z = "Spiderman",
      t = "Deadpool"

let a = 10     //Inicialización de variable
var b = 20     //Inicialización antigua de variable 

let c = a + b;

console.log("c: ", c, "suma const: ", x+y)
console.log({a}) //Al ir entre llaves se ve la variable antes de valor por defecto, sirve para introducir objetos en el log
console.log('%c Mis variables', 'color:blue;') // Así se puede aplicar css a la salida

console.table({a, b, c, x, y, z, t})

console.warn("Esto es texto de un warning")
console.error("Esto es texto de un error")


var miNombre = "Alberto"