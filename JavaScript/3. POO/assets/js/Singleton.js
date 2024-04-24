class SingletonExample {
    constructor() {
        if (!SingletonExample.instance)
            this.patron = "Creado"
            SingletonExample.instance = this
    }
}


singleton1 = new SingletonExample()
singleton2 = new SingletonExample()

console.table(singleton1)
console.table(singleton2) //No hay nada