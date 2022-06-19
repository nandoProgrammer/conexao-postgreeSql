const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/people', PessoaController.getAllPeople)
router.get('/people/:id', PessoaController.getPeopleById)
router.post('/people', PessoaController.createPeople)
router.put('/people/:id', PessoaController.updatePeople)
router.delete('/people/:id', PessoaController.deletePeople)

module.exports = router