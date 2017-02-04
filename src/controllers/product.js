const app = require('../server/server.js');
const db = app.get('db');

module.exports = {
    all: (req, res)=>{
        db.getProducts((err, result)=>{
            if(err){
                console.log("Error");
            }
            else{
                res.send(result);
            }
        });
    },
    pasta: (req, res)=> {
        db.getProductByType('Pasta', (err, result) => {
            if (err) {
                console.log("Error");
            }
            else {
                res.send(result);
            }
        });
    },
    bread: (req, res)=> {
        db.getProductByType(['Bread'], (err, result) => {
            if (err) {
                console.log("Error");
            }
            else {
                res.send(result);
            }
        });
    },
};