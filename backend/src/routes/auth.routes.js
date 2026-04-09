import express from 'express';
import { createUserSchema, loginSchema } from '../utils/zod.schemas.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

// Login route : this solution works fine for an App with views.
// router.post(
//   '/login',
//   validateRequest({ body: loginSchema }),
//   passport.authenticate('local', {
//     failureRedirect: '/...',
//     successRedirect: '/...',
//   }),
// );

// Login route : this solution works for a API used by a React app.
router.post('/login', validateRequest({ body: loginSchema }), authController.login);

// Register account
router.post('/register', validateRequest({ body: createUserSchema }), authController.createAccount);

// Check user authentication
router.get('/check', authController.checkAuthentication);

// Logout
router.post('/logout', authController.logout);

export default router;
