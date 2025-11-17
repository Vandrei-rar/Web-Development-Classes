const getFormPage = (req, res) => {
    res.render("form")
}

const postForm = (req, res) => {
    const nome = req.body.nome
    const senha = req.body.senha

    var dados = [
        {
            nome: "Rodrigo",
            senha: "1#234"
        }
    ]
    console.log(dados)

    dados.push({
        nome: nome,
        senha: senha
    })

    console.log(dados)
    console.log("Houve interação do usuário")

    return res.send("<h1 style='color: green; background-color: black;'>Acesso permitido</h1>")
}

module.exports = { getFormPage, postForm }