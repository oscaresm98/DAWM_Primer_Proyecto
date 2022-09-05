var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const { Sequelize, Op } = require('sequelize');

/* GET home page. */
router.get('/canciones', function (req, res, mext) {
    models.canciones.findAll({

    })
        .then(canciones => {
            res.json(canciones);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/artistas', function (req, res, mext) {
    models.artistas.findAll({

    })
        .then(artistas => {
            res.json(artistas);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/albums', function (req, res, mext) {
    models.album.findAll({

    })
        .then(albums => {
            res.json(albums);
        })
        .catch(error => res.status(400).send(error))
});


router.get('/canciones/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    models.canciones.findOne({
        where: { 
        cancion_id: {
            [Op.eq]: id
        }
        }
      })
      .then(productos => {  
          res.json( productos );  
      })  
      .catch(error => res.status(400).send(error))
        
})

router.get('/albums/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    models.album.findOne({
        where: { 
        album_id: {
            [Op.eq]: id
        }
        }
      })
      .then(productos => {  
          res.json( productos );  
      })  
      .catch(error => res.status(400).send(error))
        
})

module.exports = router;