var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // return res.json({ message: 'App is running'});
  return res.send('hello world');
});

module.exports = router;
