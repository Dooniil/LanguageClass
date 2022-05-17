const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const exerciseRouter = require('./exerciseRouter')
const courseRouter = require('./courseRouter')
const markRouter = require('./markRouter')

router.use('/user', userRouter)
router.use('/course', courseRouter)
router.use('/course/exercise', exerciseRouter)
router.use('/course/exercise/mark', markRouter)

module.exports = router