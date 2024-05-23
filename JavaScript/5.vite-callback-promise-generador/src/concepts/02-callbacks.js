import { heroes } from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const callbacksComponent = (element) => {
    console.log('callbacksComponent')

    const id1 = "5d86371fd55e2e2a30fe1ccb2"
    const id2 = "5d86371f1efebc31def272e2"
    const idError = "5d86371f1efebc31def272e25"

    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error
            return
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error
                return
            }

            element.innerHTML = `${hero1.name} -- ${hero2.name}`
        })
    })
}

/**
 * @param {String} id
 * @param {(error: String|null, hero: Object) => void} callback
 * */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id)

    if (!hero) {
        callback(`Heroe con id ${id} no se ha encontrado`)
        return
    }

    callback(null, hero)
}

/**
 * Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete alguna operación.
 * En este ejemplo, `findHero` es una función que toma un `id` y un `callback` como argumentos. La función `findHero` busca un héroe en
 * el array `heroes` que coincida con el `id` dado. Una vez encontrado, se llama al `callback` pasando el héroe encontrado como argumento.
 *
 * La función `callbacksComponent` usa `findHero` para buscar un héroe con un `id` específico. Cuando el héroe es encontrado, el `callback`
 * proporcionado se ejecuta, actualizando el contenido de `element` con el nombre del héroe (`heroeReibido.name`). Este patrón es útil para
 * manejar operaciones asincrónicas o tareas que requieren procesamiento adicional después de completar una operación inicial.
 *
 * En cuanto al control de errores en los callbacks, es importante manejarlos adecuadamente para gestionar situaciones inesperadas. En este ejemplo,
 * cada llamada a `findHero` recibe un callback que toma dos argumentos: `error` y `hero`. Si no se encuentra ningún héroe con el `id` proporcionado,
 * se llama al callback con un mensaje de error. En caso contrario, se llama al callback con `null` como primer argumento y el héroe encontrado como
 * segundo argumento. Esto permite al código que utiliza el callback manejar correctamente los casos de éxito y error de manera adecuada.
 */
