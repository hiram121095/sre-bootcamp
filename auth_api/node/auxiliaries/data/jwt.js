const jwt = require('jsonwebtoken');

import Config from 'config';

const generateToken = role => jwt.sign( { role }, Config.secret, {
  expiresIn: 1440
 });

const verifyToken = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, Config.secret, (err, decoded) => {      
            if (err) { reject(); }
            resolve('You are under protected data');
        });
    })
}

module.exports = {
    generateToken,
    verifyToken
}