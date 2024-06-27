-- Drops the company_db database if it currently exists --
DROP DATABASE IF EXISTS company_db;
-- Creates the company_db database --
CREATE DATABASE company_db;

-- Switches to use the company_db database --
\c company_db;

-- Creates the department table --
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

-- Creates the role table --
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  -- The 'department_id' column from the 'role' table references the 'id' column from the 'department' table to link the 2 tables and hold reference to the department the role belongs to --
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Creates the employee table --
CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  -- The 'role_id' column from the 'employee' table references the 'id' column from the 'role' table to link the 2 tables and hold reference to the employee role --
  FOREIGN KEY (role_id) REFERENCES role(id),
  -- The 'manager_id' column from the 'employee' table references the 'id' column from the 'employee' table to reference another employee that is the manager of the current employee -- 
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
