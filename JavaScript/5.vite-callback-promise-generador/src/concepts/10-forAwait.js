import { heroes } from '../heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async( element ) => {
    console.log('forAwaitComponent')

    const id = "5d86371fd55e2e2a30fe1ccb2"

    //ESTE BLOQUE BUSCA EL HEROE CON ID DEFORMA ASYNCRONA Y HACECOMPROBACIÓN CON UN IF DIRECTO DEL AWAIT
    let hero
    if ((hero = await getHeroAsync(id)))
        element.innerHTML = hero.name
    else
        element.innerHTML = "No existe el heroe"


    // AQUI RECOGEMOS Y RECORREMOS LAS PROMESAS DE TODOS LOS HEROES
    const heroIds = heroes.map( hero => hero.id)
    const heroPromises = getHeroesAsync(heroIds)

    for await( const hero of heroPromises ) {
        element.innerHTML += `${hero.name} <br/>`
    }

}

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {

    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}