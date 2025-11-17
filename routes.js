const express = require('express')
const router = express.Router()
const mainController = require("./controllers/mainController")
const formController = require("./controllers/formController")
const middlewareForm = require("./middleware/middlewareForm")

router.get("/", mainController.mainPage)

// Rotas da página de formulário
router.get("/form", formController.getFormPage)
router.post("/form/create", middlewareForm.check, formController.postForm)

module.exports = router;