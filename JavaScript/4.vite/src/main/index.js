import {crearMazo, valorCarta, pedirCarta, turnoPC, ponerCartaEnMesa} from "./functions"

const page = (() => {
    // Referencias HTML
    const btnPedir = document.querySelector("#carta")
    const btnAcabar = document.querySelector("#end")
    const btnNew = document.querySelector("#new")
    const titulos   = document.querySelectorAll("h1")
    const mesa_jugador = document.querySelector('#jugador-cartas')
    const mesa_pc = document.querySelector('#ordenador-cartas')

    let puntosUser = 0
    let puntosPC = 0
    let mazo = crearMazo()

    btnPedir.addEventListener("click", () => {
        let carta = pedirCarta(mazo)
        puntosUser += valorCarta(carta)
        titulos[0].innerText = "Jugador | "+puntosUser

        ponerCartaEnMesa(carta, mesa_jugador)

        if (puntosUser >= 21){
            btnPedir.disabled = true
            btnAcabar.disabled = true

            turnoPC(puntosUser, puntosPC, titulos, mesa_pc, mazo)
        }

    })

    btnAcabar.addEventListener("click", () => {
        btnPedir.disabled = true
        btnAcabar.disabled = true
        turnoPC(puntosUser, puntosPC, titulos, mesa_pc, mazo)
    })

    btnNew.addEventListener("click", () => {
        location.reload()
    })

    return {
        // Aquí devuelvo to.do lo que quiera que sea visible
        mazo: mazo
    }
})()