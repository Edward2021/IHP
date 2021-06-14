const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'password',
    user: 'root' , 
    database: 'IHP' , 
    host:'localhost',
    port: '3306'
});

let IHPdb = {};

IHPdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query('SELECT * FROM inclusionary_housing_projects', (err,results) => {

        if(err) {
            return reject(err);
        }
        return resolve(results); 
    });
    });
};

module.exports = IHPdb;
