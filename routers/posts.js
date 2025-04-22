//importo express
const express= require('express');

//creo variabile router il cui valore sarà un'istanza di express.router()
const router = express.Router();

//rotta per operazione index
router.get('/', function(req,res){
    res.send('Lista degli oggetti')
});

//rotta per operazione show
router.get('/:id', function (req,res){
    res.send(`Visualizzazione singolo post: ${req.params.id}`)
});

//rotta per operazione store
router.post('/', function (req,res){
    res.send('Creazione nuovo post')
});

//rotta per operazione update
router.put('/:id', function(req,res){
    res.send(`Modifica integrale del post: ${req.params.id}`)
})
//rotta per operazione modify
router.patch('/:id', function(req,res){
    res.send(`Modifica parziale del post:${req.params.id}`)
})
//rotta per operazione destroy
router.delete('/:id', function(req,res){
    res.send(`Eliminazione del post: ${req.params.id}`)
})

//esporto l'istanza di router
module.exports = router;