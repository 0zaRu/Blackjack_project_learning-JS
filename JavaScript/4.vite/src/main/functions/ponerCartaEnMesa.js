/**
 * Agrega una carta a la mesa del juego.
 * @param {string} carta - La carta que se va a agregar a la mesa.
 * @param {HTMLElement} mesa - El elemento HTML que representa la mesa del juego.
 */
export const ponerCartaEnMesa = (carta, mesa) => {
    const cartaHTML = document.createElement('img')
    cartaHTML.src = 'cartas/'+carta+'.png'
    cartaHTML.className = 'carta'

    mesa.append(cartaHTML)
}
