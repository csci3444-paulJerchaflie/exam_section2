var myPowers = require('./common/util/math/myPowers')
var express = require('express');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', './src/views/');
// routes
// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'Paul',
        lastname: 'Jerchaflie'
    };
    res.render('./pages/home.ejs', data2template);
});

// set square route
app.get('/square', function(req, res) {
    var inpNum = 2;
    var data2template = {
        head: { title: 'Square page' },
        inpNum: 2,
        resultNumber: myPowers.toSquare(inpNum)
    };
    res.render('./pages/square.ejs', data2template);
});

// set cube route
app.get('/cube', function(req, res) {
    var inpNum = 2;
    var data2template = {
        head: { title: 'Cube page' },
        inpNum: 2,
        resultNumber: myPowers.toCube(inpNum)
    };
    res.render('./pages/cube.ejs', data2template);
});



// set about route
app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('./pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});


// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://localhost:%s',
        server.address().port);
});