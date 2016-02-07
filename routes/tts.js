/* ***************************
 * Text-To-Speech Middleware
 * by Andre Lehnert 
 * 0.1.0: - Play tts example sound directly
 *        - Client-side "responsive voice" examples
 * 0.2.0: - Play text given by an URL parameter
 *          - GET /tts/speak?text=[TEXT]
 * 0.3.0: - Play text given by a HTTP-POST
 *          - POST /tts/speak 
 *            JSON-Body
 *            { text: "" }
 * ***************************
 */
var version = '0.1.0';

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
		subtitle: 'TTS Examples',
		header1: 'Client-side audio examples',
		header2: 'Server-side Festival Speech Synthesis System',
		
		author: 'Andre Lehnert',
		version: '2016 - Version ' + version
	};
	
	var ttsText = 'Hello I am a raspberry pi with text to speech functionality.';
	
	say.speak('voice_kal_diphone', ttsText);
	
	res.render('tts', content);
});

module.exports = router;
