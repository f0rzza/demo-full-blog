import HttpError from '../errors/HttpError.js';

export const errorHandler = (err, req, res, next) => {
  // Handle the custom errors.
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ status: err.statusCode, message: err.message });
  }

  // TODO : PrismaClientKnownRequestError => gérer les erreurs venant de la BDD
  // Note : pour des erreurs plus précises, ajouter la gestion des erreurs métiers comme checkEmailAndUsernameAvailable par ex.

  // Handle the other errors in JSON.
  const message = process.env.NODE_ENV === 'production' ? 'Unexpected Error' : err.message;
  res.status(500).json({ status: 500, message });
};
