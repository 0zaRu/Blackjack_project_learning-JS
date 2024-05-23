import {heroes} from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const asyncGeneratorComponent =  async (element) => {
    console.log('asyncGeneratorComponent')

    const  heroGenerator = getHeroGenerator()
    let quedanHeroes = true

    while ( true ){
        const {value, done} = await  heroGenerator.next()
        if (done) break

        element.innerHTML = value
    }
}

async function* getHeroGenerator() {
    for (const hero of heroes){
        await sleep()
        yield hero.name
    }
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 100)
    })
}