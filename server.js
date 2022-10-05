const mysql = require('mysql2');
const inquirer = require("inquirer");



var db = mysql.createConnection(
    {
    host: 'localhost',
    port: 3306,
    database: 'employees_db',
    user: 'root',
    password:'1234Spring%',
}
);

db.connect((err) => {
    if (err) {
        throw err;
    }else{
        console.log("connected!")
    }
  
});
 