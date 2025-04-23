const defaultArray= require('../data/arraydipost');
//funzione per index
function index(req,res){
    //all'inizio il post filtrato sarà uguale a quello originale
    let filteredPosts=defaultArray;
    //SE la richiesta contiene un filtro, filtriamo il post
    if(req.query.tags){
        filteredPosts=defaultArray.filter(post=>post.tags.includes(req.query.tags))
    }
    //restituisco la variabile che può risultare filtrata o contenere l'array originale
    res.json(filteredPosts)
    // res.json(defaultArray);    
}
//funzione per show
function show(req,res){
    //recuperiamo l'id e lo trasformiamo in numero
    const id= parseInt(req.params.id)
    // con find troviamo il post tramite id
    const post= defaultArray.find(post=> post.id ===id);
    //facciamo il controllo
    if(post===undefined){
        //importo lo status 404
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // lo restituiamo sotto forma di json
    res.json(post)
}
//funzione per store
function store(req,res){
    //creazione nuovo id
    const newId= defaultArray[defaultArray.length - 1].id + 1;
    //creiamo nuovo oggetto post
    const newPost ={
        id:newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    //aggiungiamo il post alla lista degli altri post
    defaultArray.push(newPost)
    //controllo
    // console.log(defaultArray);
    //restituiamo lo status 201 e il post appena creato
    res.status(201);
    res.json(newPost)
}
//funzione per update
function update(req,res){
    //recuperiamo l'id e lo trasformiamo in numero
    const id= parseInt(req.params.id)
    // con find troviamo il post tramite id
    const post= defaultArray.find(post=> post.id ===id);
    //facciamo il controllo
    if(post===undefined){
        //importo lo status 404
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    //aggiorniamo il post
    post.title=req.body.title
    post.content=req.body.content
    post.image=req.body.image
    post.tags=req.body.tags
    //controlliamo
    console.log(defaultArray);
    
}
//funzione per modify
function modify(req,res){
    res.send(`Modifica parziale del post:${req.params.id}`)
}
//funzione per destroy 
function destroy(req,res){
    const id= parseInt(req.params.id)
    const post=defaultArray.find(post=>post.id===id);
    if(post===undefined){
        //importo lo status 404
        res.status(404)
        //cosa restituisce in caso di 404
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    //rimuoviamo il post dall'array, in questo caso uno
    defaultArray.splice(defaultArray.indexOf(post), 1)

    res.sendStatus(204);
}


//esporto tutto
module.exports = {index,show,store,update,modify,destroy}