const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('conexion con DB cerrada by plt');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('demasiadas conexiones a la DB by plt');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('conexion a DB rechazada by plt');
        }
    }

    if (connection) connection.release();
    console.log('DB_fendepcldb conectada by plt');
    return;
});

pool.query = promisify (pool.query);

//exportar como
module.exports = pool;

