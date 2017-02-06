const app = require('../server/server');
const db = app.get('db');


module.exports = {
    get: (req, res)=>{
        db.getBagContents([req.params.userId], (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        });
    },
    bagger: (req, res, next)=>{
        db.getBag([req.body.productId], (err, products)=>{
            if(err){
                console.log(req.body);
                res.status(500).json(err);
            }
            else if(!products.length){
                let first = 1;
                db.makeItem([req.body.userId,  req.body.productId, first], (err, success)=> {
                    if (err) {
                        console.log(err);
                        res.status(500).json(err)
                    }
                    else {
                        res.status(200).json()
                    }
                })
            }
            else{
                console.log(req.body);
                db.add([req.body.productId], (err, success)=>{

                    if(err){
                        console.log(err);
                        res.status(500).json(err)
                    }
                    else{
                        res.status(200).json()
                    }
                })
            }
        })
    },

    update: (req, res)=>{
        db.updateNum([req.body.num, req.body.id,], (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send();
            }
        })
    },

    remove: (req, res)=>{
        db.remove([req.params.productId], (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        });
    }
};