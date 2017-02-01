const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('./config/config'),
    session = require('express-session'),
    cors = require('cors'),
    db = massive.connectSync({
    connectionString: config.elephant});

const app = module.exports = express();
app.use(express.static('../../public'));
app.use(bodyParser.json());
app.use(cors());
app.set('db', db);

// APIs for interacting with Database pulls //

app.get('/products', (req, res)=> {
    db.getProducts((err, result) => {
        if (err) {
            console.log("Error");
        }
        else {
            res.send(result);
        }
    });
});

app.listen(3001);
