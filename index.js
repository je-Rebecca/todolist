const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/todoDB');

app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json);
// var corsOptions = {
//   origin: 'http://localhost:8081',
// };
// app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.listen(2020, function () {
  console.log('server start on 2020');
});
