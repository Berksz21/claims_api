const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '[V8em5/qW1T5x@Qo',
    database: 'philhealth_db',
    port: 3306,
});

// Export a function to execute queries
function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(sql, values, (error, results) => {
                connection.release();

                if (error) {
                    reject(error);
                    return;
                }

                resolve(results);
            });
        });
    });
}

module.exports = { query };