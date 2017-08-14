const express = require('express');
const router = express.Router();

router.get('/shout/:word', (request, response, next) => {
  const { word } = request.params;
  console.log( '---===word===---', word );
  response.send( word.toUpperCase() + '!!!')
  response.status = 200
  next()
})

router.post('/array/merge', (request, response) => {
  
})


module.exports = router;