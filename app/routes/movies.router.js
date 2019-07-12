const express = require('express');
const httpStatus = require('http-status');
const moviesDomain = require('../domain/movies');
const moviesSchema = require('./schemas/movies');
const validationMiddleware = require('./middlewares/validation');

const router = express.Router();

const getMovies = async (req, res, next) => {
  try {
    const movies = await moviesDomain.getMovies();
    res.status(httpStatus.OK).send({ data: movies });
  } catch (error) {
    next(error);
  }
};

const addMovie = async (req, res) => {
  const { movie } = req.body;
  await moviesDomain.addMovie(movie);
  res.status(httpStatus.NO_CONTENT).send();
};

router.get('/', getMovies);
router.post('/', validationMiddleware(moviesSchema), addMovie);

module.exports = router;
