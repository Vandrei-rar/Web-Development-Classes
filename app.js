const express = require("express");
const { engine } = require("express-handlebars");
const path = require('path');
const routes = require('./routes');
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main', extname: '.handlebars' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'css/')))
app.use(express.static(path.join(__dirname, 'js/')))

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})