const mysql = require('mysql2');
require('dotenv').config();
const connection= mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.USER_PASS,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB
}).promise();

module.exports = {connection};
