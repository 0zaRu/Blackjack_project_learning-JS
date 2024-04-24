class Vehiclo {
    constructor(motor) {
        this.motor = motor
    }

    getMotor = () => this.motor
}

class Coche extends Vehiclo{

    static parabrisas = "Necesario"

    marca = ""
    matricula = ""
    velocidad = 0
    #parado = true

    constructor(motor="Tengo, gracias", marca, matricula, velocidad) {
        super(motor) // o this.motor
        this.marca = marca
        this.setMovimiento(velocidad)
        this.matricula = matricula
    }

    setMovimiento(velocidad) {

        if ((this.velocidad = velocidad) == 0)
            this.#parado = true
        else
            this.#parado = false
    }

    getMarca = () => this.marca
    getMatricula = () => this.matricula
    getVelocidad = () => this.velocidad
    getParado = () => this.#parado

    setMarca = (marca) => this.marca = marca
    setMatricula = (matricula) => this.matricula = matricula
    setVelocidad = (velocidad) => this.velocidad = velocidad

    arranca(velocidad) {
        this.setMovimiento(velocidad)
        console.log("run run a: " + this.velocidad + " estado: "+ this.#parado)
    }

    static romperParabrisas = () => Coche.parabrisas = "Lo rompí, llama a Carglass"

}



cocheRojo = new Coche("Tengo, gracias", "Citroen", "1234-QWS", 0)

console.table(cocheRojo)
cocheRojo.arranca(100)
console.log(cocheRojo.marca)
console.log(cocheRojo.getMarca())

console.log(Coche.parabrisas)
Coche.romperParabrisas()
console.log(Coche.parabrisas)

cocheVerde = new Vehiclo("No tengo jaja", "Citroen", "1234-QWS", 0)

console.log(cocheVerde.getMotor())

console.log(cocheRojo.getParado()) // no se puede directamente con cocheRojo.#parado porque es privado
