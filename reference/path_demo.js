//The path module provides utilities for working with file and directory paths.
// It can be accessed using:

const path = require("path");

//Base file name

console.log(__filename); 
//D:\Host\nodefirsthead\reference\path_demo.js
console.log(path.basename(__filename));
//path_demo.js


//Directory name
console.log(path.dirname(__filename));
//D:\Host\nodefirsthead\reference

//File extension
console.log(path.extname(__filename));
// .js


// Create path object
console.log(path.parse(__filename)); 
// {
//     root: 'D:\\',
//     dir: 'D:\\Host\\nodefirsthead\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
// }


//Concatenate paths
// ..test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
// D:\Host\nodefirsthead\reference\test\hello.html