var express = require('express');
var router = express.Router();

var say = require('say');

/* GET home page. */
router.get('/', function(req, res, next) {
    
  var text = 'Hello World!';  
    
  say.speak('voice_cmu_us_clb_arctic_clunits', text);
    
  res.render('index', { title: 'Express' });
});

module.exports = router;
