var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // let products = await db.mockData();
  let realData = await db.read();
  console.log(realData[0]);

  res.render('products', { title: 'Products', products: realData });
});

module.exports = router;
