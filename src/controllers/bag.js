// const app = require('../../server/server');
// const db = app.get('db');

module.exports = {
    index: (req, res)=>{
        db.getBag((err, result)=>{
            if(err){
                console.log("Error");
            }
            else{
                res.send(result);
            }
        });
    }
};