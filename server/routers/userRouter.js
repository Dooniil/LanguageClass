const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.get('/:id', userController.getOne)

module.exports = router