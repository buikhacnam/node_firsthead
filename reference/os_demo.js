//The os module provides operating system-related utility methods and properties. 
//It can be accessed using:

const os = require('os');


//platform
console.log(os.platform());

//CPU architecture
console.log(os.arch())

//CPU Core info
console.log(os.cpus());

//Free memory
console.log(os.freemem());