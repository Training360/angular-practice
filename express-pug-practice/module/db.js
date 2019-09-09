const path = require('path');
const fs = require('fs');

module.exports = class DB {
    constructor() {

    }

    mockData() {
        return new Promise( (resolve, reject) => {
            let filePath = path.join(__dirname, 'products.json');
            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(content));
            });
        });
    }
};
