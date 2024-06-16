const Movie = require('../models/task');
const asyncWrapper = require('../middlewares/async');
const { createCustomerError } = require('../errors/api_error');
const { model } = require('mongoose');

const getAllMovie = asyncWrapper(async (req, res) => {
  const movie = await Movie.find();
  res.status(200).json(movies);
});
const addMovie = asyncWrapper(async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movies);
});

const getAllMoviebyActor = asyncWrapper(async (req, res) => {
  const { actor: actor } = req.params;
  const movie = await Movie.find({ actor: actor });
  if (!movie)
    return res.status(404).json(`No movies found with Actor: ${actor}!`);
});

const updateMovieById = asyncWrapper(async (req, res) => {
  const { id: movieId } = req.params;
  const movie = await Movie.findByIdAndUpdate({ _id: movieId }, req.body, {
    new: true, // this returns the updated document rather than the original one
    runValidators: true, // checks for errors in your data and rejects it if there are any
  });
  if (!movie) {
    return next(
      createCustomerError(`movie not found with Id: ${movieId}`, 404),
    );
  }
});

module.exports = { updateMovieById, getAllMoviebyActor, addMovie, getAllMovie };
