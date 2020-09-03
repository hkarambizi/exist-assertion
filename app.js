var express = require('express');
var cors = require('cors')

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(express.static('public'))
app.use(express.json());
app.use(upload.array());
app.use(cors())
/**
 * Routes
 */
app.get('/', function(req, res) {
    console.log("endpoint reached");
    res.render("index");
    res.send({message:'Hello World!\n'});
});

app.post('/formdata', function(req, res) {
    console.log("FORMDATA endpoint reached, starting timer");

    console.log(req.headers)
    // console.log(req.body)
    setTimeout(function(){ res.send(req.body); }, 6000);

});

/**
 * Start Server
 */
app.listen(3000);
console.log('Express listening on port 3000...');
