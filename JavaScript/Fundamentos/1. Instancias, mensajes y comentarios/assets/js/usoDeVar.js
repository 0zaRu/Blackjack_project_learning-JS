console.log("Ancho de ventana: ", window.outerWidth)
//El uso de var permite modificar variables de la ventana, por lo que no se recomienda
//porque al final si llamas a la ventana no sabes si el valor es tuyo o del entorno

//Son algo así como variables globales, y estas se comparten con las variables de window

var outerWidth = 10000
console.log("Ancho de ventana: ", window.outerWidth)

//Además usar var permite usar la variable antes de inicializarla y sin error, por eso es mejor let