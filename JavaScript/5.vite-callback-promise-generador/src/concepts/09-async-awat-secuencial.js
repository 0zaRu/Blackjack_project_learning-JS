
/**
 * @param {HTMLDivElement} element
 * */
export const asyncAwaitSecuencialComponent =  async (element) => {
    console.log('asyncAwaitSecuencialComponent')

    // Al hacerlo así, sucede lo del ejercicio pasado, unas esperan a las otras y acumula el tiempo de ejecución
    // const val1 = await slowPromise()
    // const val2 = await mediumPromise()
    // const val3 = await fastPromise()

    //Al hacerlo así, todas se ejecutan a la vez en paralelo, el await hace referencia a esperar después de la ejecución de todas, no entre medias
    const [val1, val2, val3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])

    element.innerHTML = `
        value1: ${val1} <br/>
        value2: ${val2} <br/>
        value3: ${val3} <br/>`

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve("Slow-Promise")
    }, 2000)
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve("Medium Promise")
    }, 1500)
})

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve("Fast Promise")
    }, 1000)
})