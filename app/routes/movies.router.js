const express = require('express');
const moviesDomain = require('../domain/movies');

const router = express.Router();

router.get('/', moviesDomain.getMovies);

module.exports = router;
