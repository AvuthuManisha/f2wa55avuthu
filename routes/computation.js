var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var a = Math.floor(Math.random()*10);
    var b = Math.floor(Math.random()*10);
    var c = Math.floor(Math.random()*10);
    var cosFunction = Math.cos(a);
    var asinFunction = Math.asin(b);
    var asinhFunction = Math.asinh(c);
    res.render('computation', 
    { title: "Manisha Avuthu Computing functions:",
    a: a,
    b: b,
    c: c,
    cos : cosFunction,
    asin: asinFunction,
    asinh: asinhFunction,
 });
});

module.exports = router;