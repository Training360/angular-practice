const DB = require('./db');

module.exports = class GetHandler {
  constructor(req, res) {

    const reqParams = req.url.split('/');

    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2] || 0;
    ordersDB.find(id).then(
      data => res.end( JSON.stringify(data) ),
      err => {
        res.statusCode = 404;
        res.end(JSON.stringify(err));
      }
    );

  }
};
