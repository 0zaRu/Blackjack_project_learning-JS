
/**
 * @param {HTMLDivElement} element
 * */
export const environmentsComponent =  (element) => {
    console.log(import.meta.env)

    const html = `
        VITE_EJEMPLO: ${import.meta.env.VITE_EJEMPLO} <br/>
        BASE_URL: ${import.meta.env.BASE_URL} <br/>
        DEV: ${import.meta.env.DEV} <br/>
        MODE: ${import.meta.env.MODE} <br/>
        PROD: ${import.meta.env.PROD} <br/>
        SSR: ${import.meta.env.SSR} <br/>
    `

    element.innerHTML = html
}