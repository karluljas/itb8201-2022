const http = require('http');
const fs = require('fs')
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // muudab headeri sisutüüpi
    res.setHeader('Content-Type', 'text/html');

    // saada htmli fail tagasi
    fs.readFile('./netlify-express/dist/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

    res.end();
});

server.listen(PORT, 'localhost', () => {
    console.log('ootan päringuid pordil 3000')
})
/*
app.listen(PORT, function() {
    console.log('Server töötab\n');
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Kirjuta siia, kes sa oled? ', name => {
    console.log(`Tere, ${name}!\nSelleks, et veebilehel ka tervitus muutuks\nkirjuta palun url uuesti, aga lõpuga /sinunimi!`);
    var name = `${name}`
    readline.close();

    app.get('/', function(req, res, name) {
        res.status(200).send('Tere, sina!');
    });

    app.get(`/${name}`, function(req, res) {
        res.status(200).send(`Tere, ${name}!`);
    });
})
*/


