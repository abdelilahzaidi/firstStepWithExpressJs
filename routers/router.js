const express =require('express')
const router=express.Router()
const homeRouter =require('./homeRouter')
const userRouter = require('./userRouter')

router.use('/home',homeRouter)
router.use('/user',userRouter)


module.exports = router