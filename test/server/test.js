var request = require('supertest'),
				express = require('express');
var app = express();

app.get('/', function (req, res){
	res.status(200).send({name: "John"});
});

describe('GET', function (){
	it('respond with proper json', function (done){
		request(app)
						.get('/')
						.expect('Content-Type', /json/)
						.expect({name: 'John'}, done)
	});
});