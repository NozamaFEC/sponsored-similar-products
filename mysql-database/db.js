const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mcsp03fec"
});

const getAllProductInfo = (callback) => {
    connection.query('SELECT * FROM products;', (err, data) => {
        if(err) {
            callback(err, null)
        }
        callback(null, data)
    })
}

connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    console.log("database CONNECTED!") 
});

module.exports(getAllProductInfo);