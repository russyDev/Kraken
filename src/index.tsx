import { JSX } from "./lib/JSX";
import componentsFactory from './components/componentsFactory'

const header = componentsFactory.create('header');

function Hello() {
    return <div>Hello</div>
}

const App = <div>
    {header.render()}
    <h3>
        {Hello()}
    </h3>
    </div>

document.getElementById('root')?.appendChild(App);