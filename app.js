const express = require("express");
const app= express();
const port= 4000;
//asset statici
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send('Prima rotta')
})

//importo il router
const postRouter = require('./routers/posts');

// funzione use indico a express che ci sono nuove rotte specificando prefisso e router
app.use('/posts', postRouter)


app.listen(port,()=>{
    console.log(`app in ascolto alla porta ${port}`);
})