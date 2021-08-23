const mysql = require('mysql');

import Config from 'config';

const pool = mysql.createPool(Config.mysqlCredentials);

const getConnection = (callback) => {
    pool.getConnection((err, connection) => {
        callback(err, connection);
    });
};

const getUser = (connection, username) => {
    return new Promise((resolve, reject ) => {
        const query = 
            `SELECT * FROM users WHERE username = '${username}'`;
        connection.query(query, (error, userResult) => {
            connection.release();
            if (error) reject(error);
            resolve(userResult[0])
        }); 
    })
}

module.exports = {
    getUser,
    getConnection
}