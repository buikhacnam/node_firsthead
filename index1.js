console.log("hello from node js");
// on the terminal, type: node index. should print: "hello grom node js"

//now you want to bring person from person js:
//const person = require('./person');
// cannot use this, need barbel: import person from './person';
const person = require('./person');
console.log(person);
// terminal: node index > { name: 'John', age: 30 }

//From Person 2 class
const Person2 = require('./person2');
const person2One = new Person2('Joe', 30);
person2One.greeting();
//terminal: node index > my name is Joe and I am 30


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log("Hello World");
logger.log("hi");
logger.log("great");

//


