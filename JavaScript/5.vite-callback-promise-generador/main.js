import './style.css';
import javascriptLogo from './javascript.svg';
import {environmentsComponent} from "./src/concepts/01-environments.js";
import {callbacksComponent} from "./src/concepts/02-callbacks.js";
import {promiseComponent} from "./src/concepts/03-promises.js";
import {promiseCadenaComponent} from "./src/concepts/04-promise-cadena.js";
import {promiseAllComponent} from "./src/concepts/05-promise-all.js";
import {promiseRaceComponent} from "./src/concepts/06-promise-race.js";
import {asyncComponent} from "./src/concepts/07-async.js";
import {asyncAwaitComponent} from "./src/concepts/08-async-await.js";
import {asyncAwaitSecuencialComponent} from "./src/concepts/09-async-awat-secuencial.js";
import {forAwaitComponent} from "./src/concepts/10-forAwait.js";
import {generatorFunctionsComponent} from "./src/concepts/11-generator-functions.js";
import {asyncGeneratorComponent} from "./src/concepts/12-generator-async.js";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>   
  </div>
`

const element = document.querySelector(('.card'))

// environmentsComponent(element)
// callbacksComponent( element)
// promiseComponent( element )
// promiseCadenaComponent( element )
// promiseAllComponent( element )
// promiseRaceComponent( element )
// asyncComponent( element )
// asyncAwaitComponent( element )
// asyncAwaitSecuencialComponent( element )
// forAwaitComponent( element )
// generatorFunctionsComponent( element )
asyncGeneratorComponent( element )