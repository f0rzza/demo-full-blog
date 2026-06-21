import { Role } from '@prisma/client';

// Check if the user is authenticated.
export const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ status: 401, message: 'Unauthorized' });
};

// Check if the user is authorized.
// - allowedRoles: Array
// - self: {enabled: boolean, type: string}
export const checkAuthorization = (allowedRoles, allowedSelf = {}) => {
  return (req, res, next) => {
    const { id, role } = req.user;

    // Check if the authenticated user has an allowed role.
    if (allowedRoles.includes(role)) {
      return next();
    }

    const { enabled = false, type = '' } = allowedSelf;

    // If the user has not an allowed role, check if he try to access at his own content. (optional)
    if (enabled) {
      // For the posts, we need to compare authenticated user ID with the author ID.
      // Note: because ID in the path is not a user ID.
      if (type === 'post') {
        // TODO: retrieve the authorId from post ID.
      } else if (id === parseInt(req.params.id)) {
        // Authenticated user ID = queried user ID.
        return next();
      }
    }

    return res.status(403).json({ status: 403, message: 'Forbidden' });
  };
};
