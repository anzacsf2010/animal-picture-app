'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/animalController');

// For simplicity, just 2 API endpoint routes for saving and fetch the latest animal pictures.
router.post('/:type', controller.savePictures);
router.get('/:type/latest', controller.getLatest);

module.exports = router;