// base router
var router = require('express').Router(),
				bodyParser = require('body-parser');

router.use (bodyParser.json());

//add api here e.g router.use('/api/posts', require('./api/posts')

router.use('/subscribersData', require('./api/subscribersData'));
router.use(require('./static'));

module.exports = router

