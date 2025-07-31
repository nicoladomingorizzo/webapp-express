//importo express
const express = require('express');
//definisco router
const router = express.Router();
//importo il moviesController
const moviesController = require('../controllers/moviesController');

//index
router.get('/', moviesController.index)

//show
router.get('/:id', moviesController.show)

module.exports = router;