var http = require('http');
http.createServer(function (req, res) {
    // write headers. headers are basically what's written on the outside of the envelope
    // http status code. 200 OK
    // content type tells the client what kind of response it got. html? text? json?
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello World\n</h1>');
}).listen(9001);
