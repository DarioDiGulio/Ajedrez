import $Storage from "./utils/Interface/Storage.js";
import createEvents from './utils/Interface/Events.js';
import Board from './utils/Interface/Board/Board.js';

createEvents();
new Board();
new $Storage();
