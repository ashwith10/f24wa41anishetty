var express = require('express');
var router = express.Router();

function difference(a, b) {
  return Math.abs(a - b);
}

router.get('/', function(req, res, next) {
  
  let a = req.query.x ? parseFloat(req.query.x) : Math.random() * 10; 
  let b = Math.random() * 10; 

  let result = difference(a, b);
  res.send(`difference applied to ${a} and ${b} is ${result}`);
});

module.exports = router;
