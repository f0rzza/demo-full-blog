import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { categoryRoutes, postRoutes, userRoutes } from './src/routes/index.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import session from 'express-session';
import passport from 'passport';
import { useLocalStrategy } from './src/utils/passport.strategy.js';

// Load custom ENV file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

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
    cookie: { maxAge: 1000 * 60 * 60 }, // 1h
  }),
);

// Init passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize the routes
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// Handle custom errors
app.use(errorHandler);

// Define passport strategy
passport.use(useLocalStrategy());

// Define serialize functions
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
