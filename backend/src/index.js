const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://goweek:cabelera10@ds033047.mlab.com:33047/goweek-backend', 
  {
    useNewUrlParser: true
  }
);

// Criando o middleware
app.use( (req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server Started on port 3000');
});