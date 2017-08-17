var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/HairB2Bfront'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./routes/router.js')(app);

app.listen(8000, function(){
	console.log("App listening on port 8000" );
});
