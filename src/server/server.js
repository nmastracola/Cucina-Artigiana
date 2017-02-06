const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    massive = require('massive'),
    config = require('./config/config'),
    session = require('express-session'),
    db = massive.connectSync({
    connectionString: config.elephant});

const stripe = require("stripe")("sk_test_PXdCU9N1ByVaKhY0DvXIRBaF");

//// App instantiation ////

const app = module.exports = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('db', db);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(express.static('../../public'));

productGet = require('../controllers/product');
bagGet = require('../controllers/bagCtrl');

//// API for interacting with Database ////


app.get('/products', productGet.all);
app.get('/pasta', productGet.pasta);
app.get('/bread', productGet.bread);
app.get('/bag/:userId', bagGet.get);
app.post('/bag', bagGet.bagger);
app.put('/bag/:productId', bagGet.update);
app.delete('/bag/:productId', bagGet.remove);
app.post('/send-token', (req,res) => {
    console.log(req.body);
    let stripeToken = req.body.data.id;
    let amount = req.body.amount;

    stripe.charges.create({
            card: stripeToken,
            currency: 'usd',
            amount: amount,
        },
        function (err, charge) {
            if (err) {
                console.log(err);
                res.send('shits broke yo');
            } else {
                res.send('success');
            }


        });
});

app.listen(3001);


