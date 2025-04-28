const express = require("express");
const app= express();
const port= 4000;
const errorsHandler= require("./middlewares/errorhandler")
const notFound = require("./middlewares/notfound")
//asset statici
app.use(express.static('public'));

//registro il body-parser per application-json
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('Prima rotta')
})

//importo il router
const postRouter = require('./routers/posts');

// funzione use indico a express che ci sono nuove rotte specificando prefisso e router
app.use('/posts', postRouter)

//registro il middleware per gli errori
app.use(errorsHandler)
//registro il middleware per rotta non trovata
app.use(notFound)

app.listen(port,()=>{
    console.log(`app in ascolto alla porta ${port}`);
})