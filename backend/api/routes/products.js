const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");
const Rate = require("../models/rate");



router.get("/", (req, res, next) => {
  Product.find()
     .select('_id name price category rate rate_count')

    .exec()
    .then(docs => {
     
      console.log(docs);
      res.status(200).json(docs);
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/category/:search", (req, res, next) => {
  const search = req.params.search;        //tu mamy :category
  Product.find({category:search})
    .select('_id name price category rate rate_count')
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});






router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    rate: req.body.rate,
    rate_count: req.body.rate_count
  });
  product.save().then(result => {
     
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
 
  Product.findById(id)
    .select('_id name price category')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});




router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  //const updateOps = {};
 // for (const ops of req.body) {
  //  updateOps[ops.propName] = ops.value;
 // }
 // Product.update({ _id: id }, { $set: updateOps })
  Product.update({ _id: id }, { $set:{ rate:req.body.rate , rate_count:req.body.rate_count}})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Rate.find({gameId:id})
  .exec()
  .then(docs=>{
     if(docs.length<1){
      Product.remove({ _id: id })
      .exec()
      .then(result => {
          res.status(200).json(result);
        })
     }
     else{
      Product.remove({ _id: id })
      .exec()
      .then(result => {
          res.status(200).json(result);
        })
        Rate.remove({ gameId: id })
  .exec()
  .then(result => {
      res.status(200).json(result);
    })
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
