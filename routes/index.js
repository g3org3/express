var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var collection = req.db.collection('books');

	collection.find().toArray(function(err, results){
		res.render('index', {title: 'MongoLab' , items: results});
	});
});

module.exports = router;
