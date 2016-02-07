var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var content =
	{
		title: 'Express',
		
		author: 'Andre Lehnert',
		version: '2016 - Version 0.0.1'
	};
	
	res.render('index', content);
});

module.exports = router;
