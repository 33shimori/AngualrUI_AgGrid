var express = require('express'),
				path = require('path');

var	router = express.Router();

router.get('/', function (req, res){
	res.render('app', {title: "Angular UI - Grid"});
});

router.use(express.static(path.join(__dirname, '../assets')));


module.exports = router;