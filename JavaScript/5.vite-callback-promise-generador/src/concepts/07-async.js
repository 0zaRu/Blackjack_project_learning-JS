import {heroes} from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const asyncComponent =  (element) => {
    console.log('asyncComponent')

    const id1 = "5d86371fd55e2e2a30fe1ccb2"

    findHero( id1 )
        .then(({name}) => element.innerHTML = name)
        .catch( error => element.innerHTML = error)

}

// Lit es una función normal pero al poner async en vez de devolver solo "hero" lo devuelve como promesa
// Eso si la función pasa a ejecutarse en segundo plano, haciéndo todos los asyncs tirando de una pila de tareas en caso de llamar a varias
// Esto significa que sigue ejecutándose el main a la vez que el método, haciendo que pueda llegar su resultado más tarde que código más abajo en el main

const findHero = async ( id ) => {
    const hero =  heroes.find( hero => hero.id === id)

    if (!hero)
        throw  `Hero con id ${ id } no se ha encontrado`

    return hero
}