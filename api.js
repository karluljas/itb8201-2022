var express = require('express');
var app = express();
var PORT = 3000;

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

    app.get('/', function(req, res) {
        res.status(200).send('Tere, sina!');
    });

    app.get(`/${name}`, function(req, res) {
        res.status(200).send(`Tere, ${name}!`);
    });
})



