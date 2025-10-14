const mainPage = (req, res) => {
    res.render('./home', { nome: "Joãozinho", isLogged: true })
}

module.exports = { mainPage }