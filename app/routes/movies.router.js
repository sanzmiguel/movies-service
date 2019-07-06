const express = require('express');
const httpStatus = require('http-status');
const moviesDomain = require('../domain/movies');

const router = express.Router();

const getMovies = (req, res) => {
  const movies = moviesDomain.getMovies();
  res.status(httpStatus.OK).send({ data: movies, status: httpStatus.OK });
};

router.get('/', getMovies);

module.exports = router;
