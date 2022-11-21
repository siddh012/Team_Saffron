const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
var qs = require('querystring');

var db = require('mysql');
var con = db.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "domainhosting"
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");

const PORT = process.env.PORT || 5000;

app.get('/login', (req, res) => {
    console.log(req.body)
    res.send('i am in login')
})

app.get('/', (req, res) => {
    res.render('index.hbs')
})

app.get('/registration', (req, res) => {
    res.render('registration.hbs')
})

app.get('/create_id', (req, res) => {
    res.render('createid.hbs')
})

app.get('/footer', (req, res) => {
    res.render('footer.hbs')
})

app.get('/feedback', (req, res) => {
    console.log(req.body)
    res.send('i am in get in touch')
})



app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`);
});