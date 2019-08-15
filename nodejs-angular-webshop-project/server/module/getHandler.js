const DB = require('./db');

module.exports = class GetHandler {
  constructor(req, res) {

    const ordersDB = new DB('orders');

    res.end('Hello');
  }
};
