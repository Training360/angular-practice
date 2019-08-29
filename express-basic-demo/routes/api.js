var express = require('express');
var router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Please set the api endpoint.');
});

router.get('/:entity/:id', (req, res, next) => {
    let db = new DB(req.params.entity);
    let id = req.params.id || 0;

    db.find(id).then(
        data => res.json(data),
        err => res.json(err)
    );
});

router.get('/:entity', (req, res, next) => {
    let db = new DB(req.params.entity);

    db.find().then(
        data => res.json(data),
        err => res.json(err)
    );
});

module.exports = router;
