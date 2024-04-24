//No es necesario tipar las variables, js las asigna automáticamente en función del valor

let prueba = "Prueba"
let prueba2 = 'Prueba'

console.log(typeof prueba)
console.log(typeof prueba2)
document.write(prueba)

let bool = true
let num = 123
let dec = 12.3
let undef
let nulo = null

console.table({bool, num, dec, undef, nulo})

// Symbol crea objetos con identificadores únicos

let symbol = Symbol()
let symbol2 = Symbol()

console.log(symbol == symbol2)



// Arrays de multiobjetos y multidimensionales

let array = [true, 123, 123.3, "Prueba", function(){}, ()=>{}, {a: 1}, [1, 2, 3]] // La coma final se permite
console.log(array)
console.log(array[array.length-1][1])

console.log("\n\n")

array.forEach(element => {
    console.log(element)
});


let diccionario = {
    nombre: "hola",
    ejemplo: "borrame"
}

console.log("\n\n", diccionario)

delete diccionario.ejemplo

console.log("\n\n", diccionario)

// Podemos enlistar los diccionarios
let listado = Object.entries(diccionario)

console.log(listado)