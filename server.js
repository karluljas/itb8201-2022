const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // muudab headeri sisutüüpi
    res.setHeader('Content-Type', 'text/html');

    let path = './dist/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // saada htmli fail tagasi
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(PORT, 'localhost', () => {
    console.log('ootan päringuid pordil 3000')
})



