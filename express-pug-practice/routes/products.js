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

router.get('/new', async (req, res, next) => {
  res.render('new-product');
});

router.get('/update/:id', async (req, res, next) => {
  let selectedProductForSilvy = await db.read(req.params.id);
  console.log(selectedProductForSilvy);
  res.render('update-product', {product: selectedProductForSilvy[0]});
});

// Create new product.
router.post('/', async (req, res, next) => {
  let result = await db.create(req.body);
  res.json(result);
});

router.post('/update', async (req, res, next) => {
  let result = await db.update(req.body);
  res.json(result);
});

router.get('/delete/:id', async (req, res, next) => {
  let result = await db.delete(req.params.id);
  res.json(result);
});

module.exports = router;
