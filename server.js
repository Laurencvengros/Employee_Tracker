
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
                "Delete an employee",
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
            case "Delete an employee":
                deleteEmployee();
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

function addRole(){
    db.query(`SELECT * FROM department;`, (err, results) => {
        if (err) throw err;
        let departments = results.map(department => ({name: department.name, value: department.id }));
        inquirer.prompt([
            {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the role you want to add?'   
            },
            {
            type: 'input',
            name: 'salaryAmount',
            message: 'What is the salary of the role you want to add?'   
            },
            {
            type: 'rawlist',
            name: 'deptName',
            message: 'Which department do you want to add the new role to?',
            choices: departments
            },
        ]).then((answer) => {
            db.query(`INSERT INTO roles SET ?`, 
            {
                title: answer.newRole,
                salary: answer.salaryAmount,
                department_id: answer.deptName,
            },
            (err, response) => {
                if (err){
                    console.log("error adding role");
                }else{
                console.log(`\n ${answer.title} successfully added to database! \n`);
                viewRoles();
                }
            });
        });
    });
};

function addEmployee(){
    db.query(`SELECT * FROM roles;`, (err, results) =>{
        if(err) throw err;
        let role = results.map(roles => ({name: roles.title, value: roles.id}));
        db.query(`SELECT * FROM employee;`, (err, results) => {
            if (err) throw err;
            let employees = results.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));   
            inquirer.prompt([
                {
                    type: "input",
                    name: "firstName",
                    message: "Enter the employee's first name"
                },
                {
                    type: "input",
                    name: "lastName",
                    message: "Enter the employee's last name"
                },
                {
                    type: "rawlist",
                    name: "employeeRole",
                    message: "What is the employee's role?",
                    choices: role
                },
                {
                    type: 'rawlist',
                    name: 'employeeManager',
                    message: 'Who is the new employee\'s manager?',
                    choices: employees
                }
            ]).then((answer) => {
                db.query(`INSERT INTO employee SET ?`,
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.employeeRole,
                    manager_id: answer.employeeManager
                },
               
                (err,response) =>{
                    if(err){
                        console.log("error")
                    }else{
                        console.log(`\n ${answer.firstName} ${answer.lastName} successfully added to database! \n`);
                    }
                })
            })
        })
    })

};

function deleteEmployee(){
    db.query(`SELECT * FROM employee ORDER BY id ASC;`, (err,results) =>{
        if(err)throw err;
        let employees = results.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
        inquirer.prompt([
            {
                type: 'rawlist',
                name: 'employeeDelete',
                message: 'Select the employee you want to delete',
                choices: employees
            },
        ]).then((answer) =>{
            db.query(`DELETE FROM employee WHERE ?`,
                [
                    {
                    id: answer.employeeDelete,
                }
                ],
                (err, response) =>{
                    if (err){
                        console.log("error deleting employee")
                    }else{
                        console.log(`employee deleted` )
                    }
                }   
            )
        })
    })
}
