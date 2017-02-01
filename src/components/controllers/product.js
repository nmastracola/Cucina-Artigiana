const app = require('../../server/server.js');
// const db = app.get('db');

module.exports = {
    index: (req, res)=>{
        db.getProducts((err, result)=>{
            if(err){
                console.log("Error");
            }
            else{
                res.send(result);
            }
        });
    }
};