const express = require("express");
const router = express.Router();
const User = require("../models/user");
docs => {
    console.log("no siema");
    res.status(200).json(docs);
  }

router.post("/", (req, res, next) => {
    
         
    User.find({login:req.body.login , password:req.body.password})
    .exec()
    .then(docs=>{
       if(docs.length<1){
           return res.status(404).json({
               message:"nie tym razem"
           });
       }
       else{
       return res.status(200).json({
           message: "wiaj"
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




module.exports = router;