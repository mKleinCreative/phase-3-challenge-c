const express = require('express');
const router = express.Router();


router.get('/shout/:word', (request, response, next) => {
  const { word } = request.params;
  response.status(200).send( word.toUpperCase() + '!!!')
  next()
})

router.post('/array/merge', (request, response, next) => {
  function isArray(array) {
    typeof array === 'object'
  }

  const a = request.body.a
  const b = request.body.b
  if ( isArray(a) !== true || isArray(b) !== true )  {
    var result = a.reduce( (arr, v, i) => {
      return arr.concat(v, b[i]); 
    }, []);
    response.send( {result} )
  } else {
    next(err)
  }
})

module.exports = router;