'use strict';

var express = require('express');
var router = express.Router();

/* ***************************
 * TTS
 * ***************************
 */


/* GET tts page. */
router.get('/', function(req, res, next) {
	
	var content =
	{
		title: 'Text-To-Speech',
		
		author: 'Andre Lehnert',
		version: '2016 - Version 0.0.1'
	};
	
	
	
	res.render('tts', content);
});

module.exports = router;
