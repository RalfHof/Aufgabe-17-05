const express = require("express");
const fs = require("fs"); 
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    console.log("hallo aus der GET-Funktion");
    res.sendFile(__dirname + "/index.html");
});


app.post("/submit", (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    fs.appendFile('users.txt', `Name: ${name}, E-Mail: ${email}, Passwort: ${password}\n`, (err) => {
        if (err) {
            console.error('Fehler beim Schreiben der Datei', err);
            return res.status(500).send('Fehler beim Schreiben der Datei');
        }
        res.send('Registrierung erfolgreich!');
    });
});
