const express = require('express')
const { user } = require('../modules/db.js')
const userRouter = express.Router()
const userData =require('../modules/db.js')

//readAll
userRouter.get('/',(req,res)=>{
    // console.log('I am a user')
    // res.status(200).end()
    res.json(userData)
})
//readOne
userRouter.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    console.log('Id'+id)
    const user =userData.user.find( (u) =>u.id===id)
    console.log(user)
    if(!user){
        return res.status(404).send('User not found !')
    }
    res.json(user)
    console.log(res.json(user))
})

//Create
userRouter.post('/',(req,res)=>{
  
    const user=req.body
  
    if(user.lastName && user.firstName && user.email && user.passwd){
        const newUser ={
            id:userData.user.length +1,
            name:req.body.name,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            passwd:req.body.passwd
            
        }
        userData.user.push(newUser)
        res.status(201).json(newUser)
    }
})


console.log(userData)




module.exports = userRouter