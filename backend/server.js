import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load custom ENV file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
