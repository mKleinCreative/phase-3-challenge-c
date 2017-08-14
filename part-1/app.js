const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const api = require('./routes.js')

app.use( '/api', api )

app.listen(3000, () => {
  console.log( '<3333333 Listening on port 3000 <3333333' ); 
})