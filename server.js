var express = require('express'), 
				favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname +'/assets/logo.ico'));

app.set ('view engine', 'jade');
app.set ('views', __dirname + '/layout');
if (app.get('env')=== 'development'){
	app.locals.pretty = true;
}

app.use(require('./controllers'));



var port = process.env.PORT || 3000;
var server = app.listen(port, function (){
	console.log('Server', process.pid, 'listening on', port)
})
