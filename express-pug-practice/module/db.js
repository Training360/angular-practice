const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');
const pool = mariadb.createPool({database: 'shop', user: 'root', password: 'root', connectionLimit: 5});

module.exports = class DB {
    constructor() {
        pool.getConnection().then( conn => this.conn = conn );
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

    table() {
        `
        CREATE TABLE products (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL DEFAULT '0',
            price INT NOT NULL DEFAULT 0,
            stock INT NOT NULL DEFAULT 0,
            manufacturer INT NOT NULL DEFAULT 0,
            active TINYINT NULL,
            insdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
            PRIMARY KEY (id)
        )
        COMMENT='Tabler for products.'
        COLLATE='utf8_general_ci'
        `
    }

    async read() {
        let sql = `
        SELECT 
            p.id, 
            p.name, 
            p.price,
            p.stock, 
            p.active, 
            p.insdate, 
            m.name AS manufacturer, 
            m.contact AS contact	
        FROM 
            products p JOIN manufacturers m ON p.manufacturer = m.id 
        `;

        let result = await this.conn.query(sql);
        return result;

    }

    async create(data) {
        let sql = 
        `
        INSERT INTO products 
        (name, manufacturer, price, stock, active) 
        VALUES
        ('${data.name}', ${data.manufacturer}, ${data.price}, ${data.stock}, 1)
        `;

        let result = await this.conn.query(sql);
        return result;
    }
};
