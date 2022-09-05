var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/canciones', function(req, res, mext){
  models.canciones.findAll({
    
  })
 .then(canciones => {
  res.render('canciones', { title: 'My Dashboard :: canciones', arrCanciones: canciones });  
 })
 .catch(error => res.status(400).send(error))
});


router.get('/artistas', function(req, res, mext){
  models.artistas.findAll({
    
  })
 .then(artistas => {
  res.render('artistas', { title: 'My Dashboard :: Artistas', arrArtistas: artistas });  
 })
 .catch(error => res.status(400).send(error))
});


router.get('/albums', function(req, res, mext){
  models.album.findAll({
    
  })
 .then(albums => {
  res.render('albums', { title: 'My Dashboard :: Albums', arrAlbums: albums });  
 })
 .catch(error => res.status(400).send(error))
});

module.exports = router;
