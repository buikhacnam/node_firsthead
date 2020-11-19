//The url module provides utilities for URL resolution and parsing. 
//It can be accessed using:

const url = require("url");
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');


//Serialized URL 
console.log(myUrl.href);
//same:
console.log(myUrl.toString());


//Host (root domain)
console.log(myUrl.host);

//Host name (doesnt have a port like :8000)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname); 
//  /hello.html

// Serialized query
console.log(myUrl.search);
// everything from the question mark:
// ?id=100&status=active

//Params objects
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }
console.log(myUrl.href);
http://mywebsite.com/hello.html?id=100&status=active&abc=123

//loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${value} ${name}`);
})