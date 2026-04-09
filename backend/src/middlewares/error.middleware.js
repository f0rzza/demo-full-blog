import HttpError from '../errors/HttpError.js';

export const errorHandler = (err, req, res, next) => {
  // Handle the custom errors.
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Handle the other errors in JSON.
  const message = process.env.NODE_ENV === 'production' ? 'Unexpected Error' : err.message;
  res.status(500).json({ error: message });
};
