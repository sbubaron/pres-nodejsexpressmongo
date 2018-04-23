const http = require('http'); //the http module is provided by nodejs

const hostname = '127.0.0.1'; //this is the "Loopback" IP Address that points to your computer aka localhost
const port = 3000; //web traffic by default is on port 80, but can be setup to listen on any port, in this case 3000.

//req is the request
//res is the response

const server = http.createServer((req, res) => {
    //This is where the magic happens.
    //This code is the callback function that gets called for every HTTP Request that made against the server
    console.log("http request received");
    //console.log(req);

    res.statusCode = 200; //200 is the status code for "OK"
    res.setHeader('Content-Type', 'text/plain'); //we should always set an appropriate content type
    res.end('Hello CEWIT Hackathon!!!\n'); //we are sending and ending our response stream
    /*
    * NOTE
    * In many examples you may also see res.send('Hello World\n')
    * If you pass a string to res.send(), it automatically assumes a Content-Type of html. 
    * if you use res.end(), however, it simply calls node's underlying end() implementation on the response stream, 
    * so no assumptions are made for the Content-Type. 
    * */
});

/* There are many ways to skin a cat. 
 * The above code could also be written as
 */
// const server = http.createServer();

// server.on('request', (request, response) => {
//     // the same kind of magic happens here!
// });



/*
* In addition to telling the server how to handle requests, we must also tell the server to listen to them. 
* To do this we must provide at minimum the port number to listen on: server.listen(port);
* However in this case we also provide the hostname and a call back function which will fire after the server begins listening.
*/
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


console.log("Do I Print Before or After the Server Listen Log event?");

//Thats all it takes to start listening for and handling http requests.
//Time for more slides. 