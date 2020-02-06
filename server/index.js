const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

// app.get('/', (req, res) => res.send('Hello World'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/0', (req, res) => {
  axios({
    method: 'get',
    url: 'http://localhost:3003/api/0'
  })
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    console.log(error);
  })
})

app.get('/month', (req,res) => {
  const params = req.query;
  axios({
    method: 'get',
    url: `http://localhost:3001/month/${params}`
  })
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    console.log(error);
  })
})

app.get('/listings', (req, res) => {
  axios({
    method: 'get',
    url: 'http://localhost:3002/listings'
  })
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    console.log(error);
  })
})

app.get('/gallery/:id', (req, res) => {
  axios({
    method: 'get',
    url: 'http://localhost:3000/gallery/:id'
  })
  .then(function(response) {
    console.log(response);
    res.send(response.data);
  })
  .catch(function(error) {
    console.log(error);
  })
})

app.listen(port, () => console.log(`proxy server listening on port ${port}!`));
