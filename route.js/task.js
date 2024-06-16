const router = require('express').Router();
const {
  updateMovieById,
  getAllMoviebyActor,
  addMovie,
  getAllMovie,
} = require('../controller/task');

router.route('/').get(getAllMovie).post(addMovie);
router.route('/:actor').get(getAllMoviebyActor);
router.route('/:id').patch(updateMovieById);

module.exports = router;
