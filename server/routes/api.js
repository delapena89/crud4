var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

// get All llamas
router.get('/llamas', function(req, res, next) {
  Llama.find(function(err, llamas) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(llamas);
    }
  });
});


// POST a single llama
router.post('/llamas',function(req, res, next) {
  var newLlama = new Llama ({
    name: req.body.name,
    age: req.body.age,
    spitter: req.body.spitter
  });
  newLlama.save(function(err,llama) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(llama);
    }
  });
});

// get one single llama
router.get('/llama/:id', function(req, res, next) {
  Llama.findById(req.params.id, function(err, llamas) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(llamas);
    }
  });
});


// edit one single llama
router.put('/llama/:id', function(req, res, next) {
  Llama.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, llama) {
      if (err) {
        res.json({'message': err});
      } else {
      res.json(llama);
    }
  });
});


// delete one llama
router.delete('/llama/:id', function(req, res, next) {
  Llama.findByIdAndRemove(req.params.id, function(err,llama) {
      if (err) {
        res.json({'message': err});
      } else {
      res.json(llama);
    }
  });
});

module.exports = router;
