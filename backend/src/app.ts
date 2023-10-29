// Import modules from node_modules
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import path = require('path');

// Import from other .ts files
import { api } from './routes/index';
import * as dotenv from 'dotenv';

dotenv.config();

// Create express app
const app = express();

// Using third party middleware
app.use(bodyParser.json()); // body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
app.use(cors()); //

// Routes go here
// Creating route : https://expressjs.com/en/guide/routing.html
app.use('/api', api);

// serve react build statically via express
app.use(express.static(path.join(__dirname, '/../../frontend/', 'build')));

// handing /* enables client side routing
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../frontend/', 'build', 'index.html'));
});

export default app;
