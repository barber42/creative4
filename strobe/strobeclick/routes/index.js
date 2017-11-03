var express = require('express');
var router = express.Router();

/* GET home page. */

var scores = []



/* GET scores. */
router.get('/scores', function(req, res) {
   console.log("In Scores");

   res.send(scores);
});


router.get('/', function(req, res) {
  res.sendFile('strobe.html', { root: 'public' });
});


router.post('/scores',function(req, res) {
	console.log('in Scores Post');
	console.log(req.body);
	scores.push(req.body);
	res.end('{"success" : "Updated Successfully", "status" : "200"}');
});

module.exports = router;