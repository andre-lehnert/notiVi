'use strict';

var express = require('express');
var router = express.Router();

/* ***************************
 * TTS
 * ***************************
 */
var say = require('say');

/* GET tts page. */
router.get('/', function(req, res, next) {
	
	var content =
	{
		title: 'Text-To-Speech',
		
		author: 'Andre Lehnert',
		version: '2016 - Version 0.0.1'
	};
	
	var ttsText = 'Hello I am a raspberry pi with text to speech functionality.';
	
	say.speak('voice_kal_diphone', ttsText);
	
	res.render('tts', content);
});

module.exports = router;
