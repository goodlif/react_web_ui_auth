const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB
const db = ('mongodb://localhost:27017/auth');

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//App
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
router(app);

//Server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Listening on port: ', port);