var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/realestate');
var rentSchema = new mongoose.Schema({
    sqft: String,
    city: String,
    rentcost: String
});

var rentModel = mongoose.model('rentModel', rentSchema);
router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({
//     extended: true
// }));

router.get('/', function(req, res){
    console.log('/rent gotten');
    rentModel.find().then(function (data) {
        res.send(data);
    });
});

module.exports = router;
