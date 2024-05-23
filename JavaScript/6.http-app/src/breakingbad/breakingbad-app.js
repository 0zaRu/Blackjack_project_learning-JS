/**
 * @return {Promise<Object>} quoteInformation
 * */
const fetchQuote = async () => {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    console.log("Conexión a Breaking Bad Api: ",response.status)

    const data = await response.json()
    console.log(data[0])

    return data[0]
}

/**
 *
 * @param {HTMLDivElement} element
 * */
export const BreakingbadApp = async ( element ) => {
    console.log("BreakingBad-app")
    document.querySelector("#app-title").innerHTML = "BreakingBad App"
    element.innerHTML = "loading ..."


    const renderQuote = ( quote ) => {
        element.innerHTML = quote.quote
        element.innerHTML = element.textContent + `<br/><br/>` + quote.author
    }

    fetchQuote()
        .then( renderQuote )


    const nextQuoteButton = document.createElement('button')
    nextQuoteButton.innerText = "Next Quote"
    document.querySelector(".card").appendChild(nextQuoteButton)


    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = "loading ..."
        await fetchQuote()
            .then( renderQuote )
    })
}