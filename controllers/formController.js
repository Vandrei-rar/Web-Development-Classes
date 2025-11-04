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

    return res.redirect("/form")
}

module.exports = { getFormPage, postForm }