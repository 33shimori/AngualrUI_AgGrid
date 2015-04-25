var express = require('express'),
				path = require('path');

var	router = express.Router();

router.use(express.static(path.join(__dirname, '../assets')));

router.get('/', function (req,res){
	res.render('app', {tilte: "Angular UI = Grid"});
});
router.get('/:name', function (req, res) {
	var name = req.params.name;
	console.log(name);
	res.render(path.join(__dirname, '../templates') + '/'+ name);
})


module.exports = router;