const express = require('express');
const moviesRouter = require('./movies.router');

const router = express.Router();

router.use('/api/movies', moviesRouter);

module.exports = router;
