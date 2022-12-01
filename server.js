var express= require('express')
var app =express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const router =require('./routers/router')
const bodyParser =require('body-parser')


app.use(bodyParser.json())

app.get('/',function(req,res){
    console.log('Tout roule sur le port'+PORT)
    res.send('Hello AB Zaidi, today is a happy day for you and you will create your first express application')
})

app.use(router)






app.listen(PORT,()=>console.log("Server running on http://127.0.0.1:8080"))