/**
 * Devuelve una carta del mazo y la elimina del mismo.
 * @param {string[]} mazo - El mazo de cartas.
 * @returns {string} La carta extraída del mazo.
 * @throws {string} Lanza un error si no quedan cartas en el mazo.
 */
export const pedirCarta = (mazo) => {
    if (mazo.length === 0)
        throw "No quedan cartas"

    return mazo.pop()
}