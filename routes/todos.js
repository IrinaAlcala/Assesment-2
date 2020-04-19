var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.get('/', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);


module.exports = router;