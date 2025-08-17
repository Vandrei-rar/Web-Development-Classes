const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

const PORT = 3000;
const app = express();

app.engine('handlebars', hbs.engine({}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {test: "Oioioioi"});
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})