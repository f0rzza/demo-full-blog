class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// TODO : define specific errors that extend HttpError class.

export default HttpError;
