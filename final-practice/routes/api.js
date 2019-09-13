var express = require('express');
var router = express.Router();
const DB = require("./../modules/db");
const db = new DB();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.json({message: 'Server works'});
})

router.get('/users', async (req, res, next) => {
    let result = await db.read();
    res.json(result);
});

module.exports = router;
