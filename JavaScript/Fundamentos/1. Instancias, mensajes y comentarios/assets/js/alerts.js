console.log("Variable de app.js: ", miNombre) // Solo puedo porque he llamado antes a app.js

alert('Hola Mundo') //Despliega ventanita de arriba
prompt("¿Tu nombre es ... ?")   //Despliega ventanita de arriba con espacio para respuesta y se ejecuta directamente

// Si lo ejecuto asignando a variable, tengo que llamarlo para verlo, porque estoy asignando el prompt, no llamándolo

let miNombrePrompt = prompt("¿Tu nombre es ... ?");

//Me lo va a pedir dos veces, porque no enseño un valor, ejecuto un método
console.log(miNombrePrompt)
document.write("***", miNombrePrompt)


//Mensajes de confirmación
confirm("Esto es un confirm?")
