import express from 'express';
import { createUserSchema } from '../utils/zod.schemas.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

// Login
router.post('/login', (req, res) => res.send('login')); // TODO

// Register account
router.post('/register', validateRequest({ body: createUserSchema }), authController.createAccount);

// TODO : logout

export default router;
