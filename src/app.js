var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Info level ( log go to log files )
var logger = require('./services/logger.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(function(req, res, next) {
	res.set('Content-Type', 'application/json');
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.set('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Password, X-Auth-Username, X-Auth-Token');
	next();
});

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
    
	console.log('DDE DEPLOY listening at http://%s:%s', host, port);
});