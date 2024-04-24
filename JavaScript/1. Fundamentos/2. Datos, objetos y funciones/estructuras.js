// Los objetos funcionan igual que en java o python, todos son referencias
// Entonces si hago un objeto persona y quiero copiarme sus datos a persona2, si modifico persona2 se cambia persona
// Hay una forma de romper la referencia que es usando a lo guarro el operador ...

let p1 = {nombre: "Alberto"}
let p2 = p1

console.log(p1)
console.log(p2)
console.log("--------------------------Ahora vamos a cambiar el nombre solo a p2:")

p2.nombre = "Pedro"

console.log(p1)
console.log(p2)
console.log("--------------------------Ahora creamos p3 usando spread y le cambiamos el nombre solo a p3")

p3 = { ...p1 }
p3.nombre = "Alberto"

console.log(p1)
console.log(p3)
console.log("--------------------------")


// También podemos usarlo en los parámetros de un método para romper la referencia, poniendo el parámetro entre llaves y dentro ...nombreParam


// IFELSE
if (5 == 5)
    console.log("ei")
else if (4 == 4)
    console.log("ou")
else
    console.log("ou")

// EXISTE EL TRIPLE IGUAL
//COMPRUEBA EL TIPO DE LOS DATOS ADEMÁS DEL CONTENIDO

if ("5" == 5)
    console.log("Pasé claramente")

if ("5" === 5)
    console.log("No va a pasar")


// TERNARIAS COMO LAS DE PYTHON PERO MÁS EN PLAN JAVA
console.log(3 > 4 ? "Mayor" : "Menor")


// TIPOS DE FOR
cadenas = ["A", "B", "C"]

//FOR
for (let i = 0; i < cadenas.length; i++)
    console.log(cadenas[i])

//FOR IN            !!!!!!!!!!!!!!!!!!! LA VARIABLE DEL LET SIGUE SIENDO UN INDEX, NO UNA VARIABLE INTERNA
for (let cadena in cadenas)
    console.log(cadenas[cadena])

//FOR OF        ESTE SI ES COMO IUN FOREACH
for (const cadena of cadenas)
    console.log(cadena)

//FOREACH
cadenas.forEach(cadena => {
    console.log(cadena)
});