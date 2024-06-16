const { CustomAPIError } = require('../errors/api_error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.httpStatus).json({ message: err.message });
  }
  return res.status(500).json({ message: 'something went wrong, Try again' });
};

module.exports = errorHandlerMiddleware;
