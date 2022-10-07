INSERT INTO department (id, name)
VALUES  (1, "Finance");
INSERT INTO department (id, name)
VALUES  (2, "Sales");
INSERT INTO department (id, name)
VALUES  (3, "Legal");



INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, "Finance Manger", 150000.00, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (2, "Senior Finance Advisor", 120000.00, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (3, "Junior Finance Advisor", 100000.00, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (4, "Associate Finance Advisor", 100000.00, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES  (5,"Sales Manger", 110000.00, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (6,"Elite Sales Advisor", 90000.00, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (7,"Senior Sales Advisor", 75000.00, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (8,"Junior Sales Advisor", 50000.00, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES  (9,"Legal Manager", 170000.00, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (10, "Senior Legal Advisor", 150000.00, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (11, "Junior Legal Advisor", 120000.00, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES  (12, "Legal Assistant", 80000.00, 3);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Donna", "Hernandez", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Hernandez",5 , null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("William", "Hill", 9 , null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marcus", "Hough", 11, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jaimie", "Jones", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Knowels", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Linda", "Beumont", 7, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Kohl", 8, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anna", "Phillips", 10, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Bell", 12, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Johnson", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Molly", "Bright", 8, 5);



       

      