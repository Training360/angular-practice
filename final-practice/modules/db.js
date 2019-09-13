const mariadb = require('mariadb');
const pool = mariadb.createPool({user: 'root',
                                 password: 'root',
                                 database: 'employee',
                                 connectionLimit: 5});


module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn)
    }

    async read() {
        let sql = `
        SELECT * 
        FROM employees
        `;

        let result = await this.conn.query(sql);
        return result;
    }
    create() {}
    update() {}
    delete() {}
}