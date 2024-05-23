
/**
 * @param {HTMLDivElement} element
 * */
export const generatorFunctionsComponent =  (element) => {
    console.log('generatorFunctionsComponent')

    const miGenerador = miFunctGeneradora()

    console.log(miGenerador.next())
    console.log(miGenerador.next())
    console.log(miGenerador.next())
    console.log(miGenerador.next())
    console.log(miGenerador.next())


    //EJEMPLO DE USO MÁS REAL
    const genID = idGenerator()

    const button = document.createElement('button')
    button.innerText = "Dale click"
    element.append(button)

    const renderButton = () => {
        const {value} = genID.next()
        button.innerText = `Click ${ value }`
    }

    button.addEventListener('click', (event) => renderButton())

}


// Las funciones generadoras debes escribirse de forma normal, no se puede con función flecha =>
// yield de python literal

function* idGenerator() {
    let currentId = 1;
    while (true)
        yield  currentId++
}

function* miFunctGeneradora () {
    yield "Retorno 1"
    yield "Retorno 2"
    yield "Retorno 3"

    return "Acabé con el cuarto retorno"
}