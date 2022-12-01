const express = require('express')
const homeRouter =express.Router()


homeRouter.get('/:id[0-9]+',(req,res)=>{
    console.log("I'm home and my id is "+req.params.id)
    res.status(200).end()})

module.exports = homeRouter