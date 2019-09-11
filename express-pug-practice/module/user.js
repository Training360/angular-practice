const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');
const pool = mariadb.createPool({database: 'shop', user: 'root', password: 'root', connectionLimit: 5});

module.exports = class DB {
    constructor() {
        pool.getConnection().then( conn => this.conn = conn );
    }

    async login(user) {
        let sql = `
            SELECT * FROM users 
            WHERE email = '${user.email}' 
                AND password = SHA1('${user.password}')
        `;
        let result = await this.conn.query(sql);
        return result;
    }

    async read(id) {
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

        if (id) {
            sql += ` WHERE p.id = ${id}`;
        }

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

    async delete(id) {
        let sql = `
            DELETE FROM products WHERE id = ${id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }

    async update(product) {
        let sql = 
        `
        UPDATE products 
        SET 
            name = '${product.name}', 
            manufacturer = ${product.manufacturer}, 
            price = ${product.price}, 
            stock = ${product.stock},
            active = ${product.active}
        WHERE id = ${product.id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }
};
