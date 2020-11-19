//Module Wrapper Function
// (function (exports, require, module, __filename, __dirname){

// })

//console.log(__dirname, __filename);
//when run node index in terminal:
//D:\Host\nodefirsthead D:\Host\nodefirsthead\person2.js
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`my name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person2;