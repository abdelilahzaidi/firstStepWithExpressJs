var express= require('express')
var app =express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/',function(req,res){
    res.send('Hello AB Zaidi, today is a happy day for you and you will create your first express application')
})
app.listen(PORT,()=>console.log("Server running on http://127.0.0.1:8080"))