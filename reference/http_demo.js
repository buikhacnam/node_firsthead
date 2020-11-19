const http = require("http");

//Create server object
http.createServer((req, res) => {
    //Write response
    res.write("writing my response here");
    res.end();
})
.listen(5000, () => console.log("Server running..."));

// in http://localhost:5000/ : writing my response here