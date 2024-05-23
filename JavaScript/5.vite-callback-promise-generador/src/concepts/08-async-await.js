import {heroes} from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const asyncAwaitComponent =  async (element) => {
    console.log('asyncAwaitComponent')

    const id1 = "5d86371fd55e2e2a30fe1ccb2"
    const id2 = "5d86371f1efebc31def272e2"

    // Aunque async devuelve una promesa, el uso de awaut lo convierte al objeto original
    // Nos permite trabajar de forma más sencilla con varias promesas, quedando muy simple la sintaxis
    // Eso sí, encadena la ejecución de las promesas, no ejecutando la segunda hasta tener la primera, aunque no dependan los resultados entre ellos
    // El error se maneja con try catch

    try {
        const hero1 = await findHero(id1)
        const hero2 = await findHero(id2)

        element.innerHTML = `${hero1.name} / ${hero2.name}`

    }catch (error) {
        element.innerHTML = error
    }
}

const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id)

    if(!hero) throw "ERROR"
    return hero

}