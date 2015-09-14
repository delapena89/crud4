var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

// get All llamas
router.get('/llamas', function(req, res, next) {
  res.send("Hello");
});


// POST a single llama
router.post('/llamas',function(req, res, next) {

});

// get one single llama
router.get('/llama/:id', function(req, res, next) {

});
// edit one single llama
router.put('/llama/:id', function(req, res, next) {

});


// delete one llama
router.delete('/llama/:id', function(req, res, next) {

});

module.exports = router;
