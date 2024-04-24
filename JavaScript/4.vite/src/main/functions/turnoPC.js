import {pedirCarta, ponerCartaEnMesa, valorCarta} from "./";

/**
 * Realiza el turno de la computadora en el juego de blackjack.
 * @param {number} puntosUser - Los puntos del jugador.
 * @param {number} puntosPC - Los puntos de la computadora.
 * @param {NodeListOf<HTMLElementTagNameMap[string]>} titulos - Los elementos de título para mostrar los puntos.
 * @param {HTMLElement} mesa_pc - El contenedor HTML para mostrar las cartas de la computadora.
 * @param mazo
 */
export const turnoPC = (puntosUser, puntosPC, titulos, mesa_pc, mazo) => {
    do {

        let carta = pedirCarta(mazo)
        puntosPC += valorCarta(carta)
        titulos[1].innerText = "Ordenador | "+ puntosPC

        ponerCartaEnMesa(carta, mesa_pc)

        if (puntosUser > 21)
            break

    } while(puntosPC < puntosUser && puntosUser <= 21)

    setTimeout(() => {compruebaVictoria(puntosUser, puntosPC)}, 100)
}

/**
 * Comprueba quién ha ganado el juego de blackjack.
 * @param {number} puntosUser - Los puntos del jugador.
 * @param {number} puntosPC - Los puntos de la computadora.
 */
const compruebaVictoria = (puntosUser, puntosPC) => {
    if ((puntosUser > puntosPC && puntosUser <= 21) || (puntosUser <= 21 && puntosPC > 21))
        alert("HA GANADO EL JUGADOR")

    else if ((puntosPC > puntosUser && puntosPC <= 21) || (puntosPC <= 21 && puntosUser > 21))
        alert("HA GANADO EL ORDENADOR")

    else
        alert("EMPATE, NADIE HA GANADO")

}
