/*
 * app.js
 * NPM entry point
 *
 */

var express = require('express');
var hdbs    = require('express3-handlebars').create({ defaultLayout:'main' })
var fortune = require('./lib/fortune.js')

/* CONFIG */
var app = express()
app.set('port', process.env.PORT || 3000)
app.engine('handlebars', hdbs.engine)
app.set('view engine', 'handlebars')

/* MIDDLEWARE */
app.use(express.static(__dirname + '/public'))
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' 
        && req.query.test === '1' 
    next()
})

/* ROUTES */
app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScripts: '/qa/tests-about.js'   
    })
})

// custom 404 page
app.use( function(req, res) {
    res.status(400)
    res.render('404')
})

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})

app.listen(app.get('port'), function() {
    console.log('Express servers started on http://localhost' 
        + app.get('port')
        + '; press Ctrl-C to terminate')
})

