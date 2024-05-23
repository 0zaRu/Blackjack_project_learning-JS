const { frutas, dinero } = require('./frutas')
const cowsay = require("cowsay")

frutas.forEach(fruta => {
    console.log(fruta)
})
console.log("Dinero: ", dinero)


console.log(cowsay.say({
    text: "Hola mundo",
    e: "oO",
    T: "U"
}))

/**
 * Para crear el package.json: npm init -y
 * Para instalar un paquete: npm i cowsay
 */