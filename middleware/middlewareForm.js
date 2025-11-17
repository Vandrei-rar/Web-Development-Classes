const check = (req, res, next) => {
    
    const usuario = req.body.nome
    const senha = req.body.senha

    if (usuario == "Vandrei" && senha == "1234") {
        console.log("Usuário autenticado")
        next()
    }

    res.send("<h1 style='color: red; background-color: black;'>Acesso negado</h1>")
}

module.exports = { check }