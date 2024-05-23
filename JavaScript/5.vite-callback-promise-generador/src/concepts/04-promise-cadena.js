import {heroes} from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const promiseCadenaComponent =  (element) => {
    console.log('promiseCadenaComponent')

    const renderHero = (hero) => {
        element.innerHTML = hero.name
    }

    const  renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `
    }

    const render2Hero = (hero1, hero2) => {
        element.innerHTML = `${hero1.name} -- ${hero2.name}`
    }

    
    const id1 = "5d86371f1efebc31def272e2"
    const id2 = "5d86371fd55e2e2a30fe1ccb2"
    let hero1

    // CADENA DE PROMESAS CONSECUTIVAS
    findHero(id1)
        .then(hero => {
            hero1 = hero
            return findHero(id2)
        }).then( hero2 => {
            render2Hero(hero1, hero2)
    })
        .catch(renderError)

}

/**
 * @param {String} id
 * @return {Promise}
 * */
const findHero = ( id ) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id)

        if (hero)
            resolve(hero)
        else
            reject(`Heroe con id ${id} no se ha encontrado`)
    })
}