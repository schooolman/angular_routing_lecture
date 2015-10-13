//The only purpose for this router is to serve the index. That is it. Get people to the default page.


var express = require('express');
var index = require('../routes/index');
var company = require('../routes/company');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var mongoURI = 'mongodb://localhost:27017/tuesday_review';

mongoose.connect(mongoURI);



//app.get('/', function(request, response){
//    console.log('hit the default route');
//    response.send('you have hit the default route');
//});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//this is going to send our traffic to the router
//"use" this route
app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);
app.use('/company', company);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});


