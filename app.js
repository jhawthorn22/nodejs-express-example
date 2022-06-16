const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello from Express!');
})

app.get('/health', function (req, res) {
  res.status(200).send('EXPRESS GOOD!');
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})
