const mysql = require('mysql2');
const inquirer = require("inquirer");
const { exit } = require('process');



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
        console.log("Error connecting");
    }else{
        console.log("Connected! Welcome to the Employee Manager!");
        promptUser();
    }
  
});


 
function promptUser(){
    
    inquirer.prompt([
        { 
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit application"
            ]
        }
    ]).then(function(choice){
        switch(choice.action){
            case "View all departments":
                viewDepartment();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
            case "Exit application":
                exit();

        }
    })
}