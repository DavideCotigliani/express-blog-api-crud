//importo express
const express= require('express');

//creo variabile router il cui valore sarà un'istanza di express.router()
const router = express.Router();

//importo le funzioni del controller
const postController = require('../controllers/postControllers')

// ROTTE PER POSTS
//rotta per operazione index
router.get('/', postController.index);

//rotta per operazione show
router.get('/:id', postController.show);

//rotta per operazione store
router.post('/', postController.store);

//rotta per operazione update
router.put('/:id', postController.update);

//rotta per operazione modify
router.patch('/:id', postController.modify);
//rotta per operazione destroy
router.delete('/:id', postController.destroy);

//esporto l'istanza di router
module.exports = router;