var express = require('express');
var router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let db = new DB();
  let products = await db.mockData();
  res.render('products', { title: 'Products', products: products });
});

module.exports = router;
