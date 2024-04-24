import _ from "underscore";

/**
 * Crea un mazo de cartas y lo mezcla.
 * @returns {string[]} Un array que representa un mazo de cartas.
 */
export const crearMazo = () => {
    let mazo = []
    for(let letra of ['C', 'D', 'H', 'S']){
        for(let i = 2; i <= 10; i++)
            mazo.push(i+letra)

        for(let especial of ['A', 'J', 'Q', 'K'])
            mazo.push(especial+letra)
    }
    return _.shuffle(mazo)
}