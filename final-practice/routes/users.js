var express = require('express');
var router = express.Router();
const DB = require('../modules/db');
const db = new DB();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let users = await db.read();
  console.log(users);
  res.render('users', {users: users});
});

module.exports = router;
