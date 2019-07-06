const redisTools = require('../tools/redis');

const MOVIES_KEY = 'movies';

const getMovies = async () => {
  const movies = await redisTools.get(MOVIES_KEY);
  if (!movies) {
    return [];
  }
  return movies;
};

const addMovie = async (movie) => {
  let movies = await redisTools.get(MOVIES_KEY);
  if (!movies) {
    movies = [movie];
  } else {
    movies.push(movie);
  }
  await redisTools.set(MOVIES_KEY, movies);
};

module.exports = {
  getMovies,
  addMovie,
};
