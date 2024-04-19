const page = (() => {
    // Referencias HTML
    const btnPedir = document.querySelector("#carta")
    const btnAcabar = document.querySelector("#end")
    const btnNew = document.querySelector("#new")
    const titulos   = document.querySelectorAll("h1")
    const mesa_jugador = document.querySelector('#jugador-cartas')
    const mesa_pc = document.querySelector('#ordenador-cartas')


    // MÉTODOS
    const crearMazo = () => {    
        for(let letra of ['C', 'D', 'H', 'S']){
            for(let i = 2; i <= 10; i++) 
                mazo.push(i+letra)
            
            for(let especial of ['A', 'J', 'Q', 'K'])
                mazo.push(especial+letra)
        }
        return mazo
    }

    const pedirCarta = () => {
        if (mazo.length === 0)
            throw "No quedan cartas"

        return mazo.pop()
    }

    const valorCarta = (carta) => {
        if (isNaN ( l = carta[0]))
            return l === 'A' ? 11 : 10
        else
            return parseInt(carta.match(/[0-9]/g).join(""))

        //Método en una línea algo guarro
        // return isNaN(l = carta[0]) ? (l === 'A' ? 11 : 10) : parseInt(carta.match(/[0-9]/g).join(""))
    }

    const turnoPC = (puntosMin) => {
        do {
            
            let carta = pedirCarta()
            puntosPC += valorCarta(carta)
            titulos[1].innerText = "Ordenador | "+ puntosPC

            const cartaHTML = document.createElement('img')
            cartaHTML.src = 'assests/cartas/'+carta+'.png'
            cartaHTML.className = 'carta'

            mesa_pc.append(cartaHTML)

            if (puntosMin > 21)
                break

        } while(puntosPC < puntosMin && puntosMin <= 21)
        
        setTimeout(() => {compruebaVictoria()}, 100)
    }

    const compruebaVictoria = () => {
        if ((puntosUser > puntosPC && puntosUser <= 21) || (puntosUser <= 21 && puntosPC > 21))
            alert("HA GANADO EL JUGADOR")

        else if ((puntosPC > puntosUser && puntosPC <= 21) || (puntosPC <= 21 && puntosUser > 21))
            alert("HA GANADO EL ORDENADOR")

        else
            alert("EMPATE, NADIE HA GANADO")

    }

    btnPedir.addEventListener("click", () => {
        let carta = pedirCarta()
        puntosUser += valorCarta(carta)
        titulos[0].innerText = "Jugador | "+puntosUser

        const cartaHTML = document.createElement('img')
        cartaHTML.src = 'assests/cartas/'+carta+'.png'
        cartaHTML.className = 'carta'

        mesa_jugador.append(cartaHTML)

        if (puntosUser >= 21){
            btnPedir.disabled = true
            btnAcabar.disabled = true
            turnoPC(puntosUser)
        }
        
    })

    btnAcabar.addEventListener("click", () => {
        btnPedir.disabled = true
        btnAcabar.disabled = true
        turnoPC(puntosUser)
    })

    btnNew.addEventListener("click", () => {
        location.reload()
    })


    let puntosUser = 0
    let puntosPC = 0
    let mazo = []
    mazo = _.shuffle(crearMazo())

    return {
        // Aquí devuelvo todo lo que quiera que sea visible
        mazo: mazo
    }
})()