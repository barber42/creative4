var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('strobe.html', { root: 'public' });
});

var scores = [
	{name: 'Alpha', score: '50'}, 
        {name: 'Bravo', score: '55'}, 
	{name: 'Charlie', score: '40'}
];

/* GET scores. */
router.get('/scores', function(req, res) {
   console.log("in Scores");

res.send(scores);
});

module.exports = router;
