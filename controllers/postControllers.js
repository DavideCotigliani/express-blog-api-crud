const defaultArray= require('../data/arraydipost');
//funzione per index
function index(req,res){
    console.log("Contenuto array:", defaultArray);
    res.json(defaultArray);    
}
//funzione per show
function show(req,res){
    //recuperiamo l'id e lo trasformiamo in numero
    const id= parseInt(req.params.id)
    // con find troviamo il post tramite id
    const post= defaultArray.find(post=> post.id ===id);
    // lo restituiamo sotto forma di json
    res.json(post)
}
//funzione per store
function store(req,res){
    res.send('Creazione nuovo post')
}
//funzione per update
function update(req,res){
    res.send(`Modifica integrale del post: ${req.params.id}`)
}
//funzione per modify
function modify(req,res){
    res.send(`Modifica parziale del post:${req.params.id}`)
}
//funzione per destroy 
function destroy(req,res){
    const id= parseInt(req.params.id)
    const post=defaultArray.find(post=>post.id===id);
    
    //rimuoviamo il post dall'array, in questo caso uno
    defaultArray.splice(defaultArray.indexOf(post), 1)

}


//esporto tutto
module.exports = {index,show,store,update,modify,destroy}