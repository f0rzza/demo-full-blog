// Method to validate params and body from Schemas.
export const validateRequest = ({ params, body }) => {
  return (req, res, next) => {
    try {
      if (params) params.parse(req.params);
      if (body) body.parse(req.body);
      next();
    } catch (error) {
      // Group all the errors.
      const errors = error.issues.map((error) => error.message);
      res.status(400).json({ status: 400, message: 'Invalid Request', errors: errors });
    }
  };
};
