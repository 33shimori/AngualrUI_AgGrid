var router = require('express').Router();

router.get('/', function (req, res){
	
		res.send(
[
{"no":"1","name":"Betty", "loyalty": 3,"joinDate":"3/5/10", "userType":"Free"},
{"no":"2","name":"John", "loyalty": 5,"joinDate":"3/5/05", "userType":"Premium"},
{"no":"3","name":"Peter", "loyalty": 6,"joinDate":"3/5/10", "userType":"Free"},
{"no":"4","name":"Jaden", "loyalty": 7,"joinDate":"10/12/12", "userType":"Premium"},
{"no":"5","name":"Shannon", "loyalty": 9,"joinDate":"22/01/08", "userType":"Premium"}
] 
						);
	
});
module.exports = router