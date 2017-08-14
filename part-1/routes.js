const express = require('express');
const router = express.Router();


router.get('/shout/:word', (request, response, next) => {
  const { word } = request.params;
  response.status(200).send( word.toUpperCase() + '!!!')
  next()
})

router.post('/array/merge', (request, response, next) => {
  
  const a = request.body.a
  const b = request.body.b
  if (a !typeof Array || b !typeof Array) {
    const error = new Error()
    response.send({error})
  } else{
    var result = a.reduce( (arr, v, i) => {
      return arr.concat(v, b[i]); 
    }, []);
    response.send( {result} )
    next()
  }
})


module.exports = router;