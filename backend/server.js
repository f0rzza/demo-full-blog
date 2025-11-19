import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {categoryRoutes, postRoutes, userRoutes} from './src/routes/index.js';

// Load custom ENV file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({extended: true}));

// Initialize the routes
app.use("/categories", categoryRoutes);
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
