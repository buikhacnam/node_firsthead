const EventEmitter = require("events");
const uuid = require("uuid");

console.log(uuid.v4()); //33bcd4b8-0521-4857-9e09-bb69d2bfb9c2

class Logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit("message", {id: uuid.v4(), msg});
    }
}

module.exports = Logger;