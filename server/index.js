const express = require('express'),
  app = express(),
  PORT = 7777;
const cors = require('cors');
// const axios = require('axios');
const db = require('../database/index.js');

app.use(cors());
app.use(express.json());
app.use('/', express.static('client/dist'));

app.get('/api/stores/:id', (req, res) => {
  db.Store.findOne(
    {
      'store_id': req.params.id
    }
  )
  .then(results =>
    res
    .status(200)
    .json({stores: results}))
  .catch(err => {
    console.log("error ")
    res
    .status(400)
    .json({error: err})
  })
})


app.get('/api/products/:id', (req, res) => {
  // console.log("id", req.params.id)
  db.Product.findOne(
    {
      'product_id': req.params.id
    }
  )
  .then(results => {
    res
    .status(200)
    .json({products: results})
  })
  .catch(err => {
    console.log(err)
    res
    .status(400)
    .json({error: err})
  })
})

// app.get('/api/products', (req, res) => {
//   console.log("Get req:", req)
//   db.Product.find()
//   .then(results => {
//     res
//     .status(200)
//     .json({products: results})
//   })
//   .catch(err => {
//     res
//     .status(400)
//     .json({error: err})
//   })
// })

app.listen(PORT, () => console.log('Backend server live on: ', PORT));