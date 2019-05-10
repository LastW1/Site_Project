const express = require("express");
const router = express.Router();
const Rate = require("../models/rate");
const mongoose = require("mongoose");


router.get("/", (req, res, next) => {
    Rate.find()
    .select('_id gameId userId value')
    .exec()
    .then(docs => {       
        console.log(docs);
        res.status(200).json(docs);
      }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });



  router.post("/", (req, res, next) => {
    Rate.find({gameId:req.body.gameId , userId:req.body.userId})
    .exec()
    .then(docs=>{
        if(docs.length<1){
            const rate = new Rate({
                _id: new mongoose.Types.ObjectId(),
                userId: req.body.userId,
                gameId: req.body.gameId,
                value: req.body.value,
              });
              rate.save().then(result => {
       
                res.status(201).json({
                  message: "Handling POST requests to /rating",
                  createdRate: result
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });

        }
        else{
            return res.status(200).json({
                message: "już dałeś ocenę"
            });
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
   
});
  


router.delete("/:rateId", (req, res, next) => {
    const id = req.params.rateId;
    Rate.remove({ _id: id }).exec().then(result => {
        res.status(200).json(result);
      }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;