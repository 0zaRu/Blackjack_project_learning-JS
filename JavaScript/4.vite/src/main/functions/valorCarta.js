/**
 * Devuelve el valor numérico de una carta.
 * @param {string} carta - La carta cuyo valor se va a calcular.
 * @returns {number} El valor numérico de la carta.
 */
export const valorCarta = (carta) => {
    let l;
    if (isNaN ( l = carta[0]))
        return l === 'A' ? 11 : 10
    else
        return parseInt(carta.match(/[0-9]/g).join(""))

    //Método en una línea algo guarro
    // return isNaN(l = carta[0]) ? (l === 'A' ? 11 : 10) : parseInt(carta.match(/[0-9]/g).join(""))
}