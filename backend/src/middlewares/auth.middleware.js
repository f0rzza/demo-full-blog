import { Role } from '@prisma/client';

// Check if the user is authenticated.
export const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ status: 401, message: 'Unauthorized' });
};

// Check if the user is authorized.
export const checkAuthorization = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ status: 403, message: 'Forbidden' });
    }
    next();
  };
};

// Combines authentication and authorization middlewares.
export const authorize = (...roles) => [checkAuthentication, checkAuthorization(...roles)];
