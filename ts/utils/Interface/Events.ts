import Route from "../Interface/Route.js";
import DomElement from './DomElement.js';

const createEvents = () => {
    if (Route.IS_INDEX) {
        new DomElement('login').addEvent('click', () => {console.log('Hola mundo')});
    }
}

export default createEvents;
