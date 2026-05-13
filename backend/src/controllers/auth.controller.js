import HttpError from '../errors/HttpError.js';
import authService from '../services/auth.service.js';
import passport from 'passport';

async function login(req, res, next) {
  // Create an authentication middleware
  const authMiddleware = passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      // delegates error management to 'errorHandler' middleware.
      return next(new HttpError(info?.message || 'Invalid credentials', 401));
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      // Duplicate user without password
      const { password, ...userWithoutPassword } = user;
      return res.json({ data: userWithoutPassword, message: 'Connection successful' });
    });
  });

  // Call the middleware.
  authMiddleware(req, res, next);
}

async function createAccount(req, res) {
  // Create new user with correct data.
  const user = await authService.createAccount(req.body);
  return res.json({ data: user, message: 'Account successfully created' });
}

function checkAuthentication(req, res, next) {
  if (!req.user) {
    // delegates error management to 'errorHandler' middleware.
    return next(new HttpError('Not authenticated', 401));
  }
  res.json({ data: req.user });
}

function logout(req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ data: null, message: 'Logout successful' });
  });
}

export default { login, createAccount, checkAuthentication, logout };
