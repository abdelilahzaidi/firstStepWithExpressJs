const express =require('express')
const router=express.Router()
const homeRouter =require('./homeRouter')

router.use('/home',homeRouter)

module.exports = router