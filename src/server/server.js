const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    massive = require('massive'),
    config = require('./config/config'),
    session = require('express-session'),
    passport = require('passport'),
    db = massive.connectSync({
    connectionString: config.elephant}),
    LocalStrategy = require('passport-local').Strategy;


//// App instantiation ////

const app = module.exports = express();
app.use(express.static('../../public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('db', db);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));



//// Passport Local Auth ////
passport.use(new LocalStrategy(
    (username, password, done) => {
        db.getUserByUsername([username], (err, user) => {
            user = user[0];
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password != password) {
                return done(null, false);
            }
            return done(null, user);
        })
    }
));

//// Session Persistence

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.getUserById([id], function (err, user) {
        user = user[0];
        if (err) { return cb(err); }
        cb(null, user);
    });
});

//// State initialization ////
app.use(passport.initialize());
app.use(passport.session());

//// Auth endpoints ////

app.post('/auth/local', passport.authenticate('local'), (req, res) => {
    res.status(200).redirect('/');
});



app.get('/auth/me', (req, res) => {
    if (!req.user) return res.sendStatus(404);
    res.status(200).send(req.user);
});

app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});



//// API for interacting with Database ////

app.get('/products', (req, res) => {
    db.getProducts((err, result) => {
        if (err) {
            console.log("Error");
        }
        else {
            res.send(result);
        }
    });
});
//
// app.post('/bag', (req, res) => {
//     db.
// })

app.listen(3001);

