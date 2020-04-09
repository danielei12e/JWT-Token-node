
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AuthController = require('./controllers/AuthController');

const port = process.env.PORT || 3000;


mongoose.connect('mongodb://127.0.0.1:27017/jwt-token');

app.get('/api', function (req, res) {
  res.status(200).send('API works');
});

app.use('/api/auth', AuthController);

app.listen(port, function() {
  console.log('server listening on port ' + port);
});