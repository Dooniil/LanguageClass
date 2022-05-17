const Router = require('express')
const router = new Router()
const exerciseController = require('../controller/exerciseController')

router.post('/', exerciseController.create)
router.get('/', exerciseController.getAll)
router.get('/:id', exerciseController.getOne)

module.exports = router