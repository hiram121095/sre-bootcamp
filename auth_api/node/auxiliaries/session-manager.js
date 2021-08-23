const crypto = require('crypto');

import { getConnection, getUser } from './data/mysql.js';
import { generateToken } from './data/jwt.js'

const getSession = (InputUsername, InpuPassword) => {
    return new Promise((resolve, reject) => {
        getConnection((error, connection) => {
            if(error) reject(error);
            getUser(connection, InputUsername)
                .then(user => {
                    const { password, salt, role } = user;
                    validateData(password, passwordSHA512(InpuPassword, salt)) ?
                        resolve(generateToken(role)) : reject() 
                })
                .catch(error => console.log(error));
        })
    });
}

const validateData = (userPassword, dataBasePassword) => 
    userPassword === dataBasePassword

const passwordSHA512 = (password, salt) => 
    crypto.createHash('sha512').update(password + salt).digest('hex');

module.exports = {
    getSession 
} 
