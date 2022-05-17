const Router = require('express')
const router = new Router()
const markController = require('../controller/markController')

router.post('/', markController.create)
router.get('/', markController.getAll)
router.get('/:id', markController.getOne)

module.exports = router