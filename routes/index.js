const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', todoCtrl.index);
router.post('/', todoCtrl.create);


module.exports = router;