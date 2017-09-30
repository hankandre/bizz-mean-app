var express = require('express');
var app = express();
var path = require('path');
var index = require('');

app.use(express.static('public'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3003, function() {
    console.log('on 3003');
});