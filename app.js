const express = require("express");
const app = express();

app.set("view engine", "ejs");

// kuulab päringuid
app.listen(process.env.PORT || 5000);

//esileht
app.get("/", (req, res) => {
   res.sendFile("./dist/index.html", {root: __dirname});
});

//kuidas esimene kodutöö edenes
app.get("/about", (req, res) => {
    res.sendFile("./dist/about.html", {root: __dirname});
});

//404 leht
app.use((req, res) => {
    res.status(404).sendFile("./dist/404.html", {root: __dirname});
});
