var express = require('express');
var app = express();
var path = require('path');
// var bodyParser = require('body-parser');



var rentRoute = require('../public/routes/listings');
// var indexRoute = require('./routes/indexrouter');

// app.use('/', indexRoute);
app.use('/rent', rentRoute);

app.use(express.static(path.join(__dirname, '../public')));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3003, function() {
    console.log('on 3003');
});