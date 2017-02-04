const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    massive = require('massive'),
    config = require('./config/config'),
    session = require('express-session'),
    db = massive.connectSync({
    connectionString: config.elephant});

//// App instantiation ////

const app = module.exports = express();
app.use(bodyParser.json());
app.set('db', db);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use(session({
//     secret: config.secret,
//     resave: true,
//     saveUninitialized: true,
//     }
// ));

app.use(express.static('../../public'));

productGet = require('../controllers/product');

//// API for interacting with Database ////


app.get('/products', productGet.all);
app.get('/pasta', productGet.pasta);
app.get('/bread', productGet.bread);

//
// app.post('/bag', (req, res) => {
//     db.
// })

app.listen(3001);


