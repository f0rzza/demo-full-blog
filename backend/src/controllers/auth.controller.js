import authService from '../services/auth.service.js';
import passport from 'passport';

async function login(req, res, next) {
  // Create an authentication middleware
  const authMiddleware = passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: info?.message || 'Identifiants invalides' });
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      // Duplicate user without password
      const { password, ...userWithoutPassword } = user;
      return res.json({ success: true, user: userWithoutPassword });
    });
  });

  // Call the middleware.
  authMiddleware(req, res, next);
}

async function createAccount(req, res) {
  // Create new user with correct data.
  const user = await authService.createAccount(req.body);
  res.json(user);
}

export default { login, createAccount };
