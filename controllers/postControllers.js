const defaultArray= require('../data/arraydipost');


//funzione per index
function index(req,res){
    res.json(defaultArray);
}
//funzione per show
function show(req,res){
    res.send(`Visualizzazione singolo post: ${req.params.id}`)
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
    res.send(`Eliminazione del post: ${req.params.id}`)
}

//esporto tutto
module.exports = {index,show,store,update,modify,destroy}