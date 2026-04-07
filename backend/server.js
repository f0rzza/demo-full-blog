import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { categoryRoutes, postRoutes, userRoutes, authRoutes } from './src/routes/index.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import session from 'express-session';
import passport from 'passport';
import { useLocalStrategy } from './src/utils/passport.strategy.js';
import cors from 'cors';

// Load custom ENV file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  morgan('combined', {
    // Log only error responses.
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  }),
);

// Init session
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60, sameSite: 'lax', httpOnly: true }, // Lifetime: 1h
  }),
);

// Init passport
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.ALLOWED_FRONTEND_URL,
    credentials: true,
  }),
);

// Initialize the routes
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Handle custom errors
app.use(errorHandler);

// Define passport strategy
passport.use(useLocalStrategy());

// Define serialize functions
passport.serializeUser((user, cb) => {
  const { password, ...userWithoutPassword } = user;
  cb(null, userWithoutPassword);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
