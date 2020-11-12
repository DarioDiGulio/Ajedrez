import Route from "./utils/Interface/Route.js";
import $Storage from "./utils/Interface/Storage.js";
import createEvents from './utils/Interface/Events.js';

createEvents();

if (Route.IS_INDEX) {
    new $Storage();
}
