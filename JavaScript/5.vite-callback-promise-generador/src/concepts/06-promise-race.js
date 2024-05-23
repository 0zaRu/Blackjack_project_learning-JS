
/**
 * @param {HTMLDivElement} element
 * */
export const promiseRaceComponent =  (element) => {
    console.log('promiseRaceComponent')

    element.innerHTML = "Loading ..."

    const valorRender = ( value ) => {
        element.innerHTML = value
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then( valorRender )

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve("Slow Promise")
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