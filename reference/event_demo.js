const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {

}

//Init object
const myEmitter = new MyEmitter();


//Event listener
myEmitter.on('sukien', () => console.log('Event Fired!'))

//init event
myEmitter.emit('sukien');
//Event Fired!

