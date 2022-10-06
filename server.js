
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');




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
                exitApp();

        }
    });
};

function viewDepartment(){
    let query = "SELECT * FROM department";
    db.query(query, function(err, results){
        if(err){
            console.log(err)
        }else{
            console.table(results)
            promptUser();
        };
        
    });
};

function viewRoles(){
    let query = "SELECT * FROM roles";
    db.query(query, function(err,results){
        if(err){
            console.log(err)
        }else{
            console.table(results)
            promptUser();
        };
    });
};

function viewEmployees(){
    let query = "SELECT * FROM employee";
    db.query(query, function(err,results){
        if(err){
            console.log(err)
        }else{
            console.table(results)
            promptUser();
        };
    });
};

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name: "newDeptName",
            message: "What is the name of the department you are adding?",
        }
    ]).then((answer) =>{
        db.query(`INSERT INTO department (name) VALUES ('${answer.newDeptName}')`, (err,results) => {
            if (err){
                console.log("error adding department");
            }else{
                console.log(results);
                viewDepartment();
                
            }
        });
    });
};

