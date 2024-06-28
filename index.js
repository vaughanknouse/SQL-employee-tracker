// Import and require pg package dependency
const { Pool } = require('pg');
// Import and require inquirer package dependency
const inquirer = require('inquirer');

// Connect to database
const pool = new Pool(
  {
    user: 'postgres',
    password: 'Ralphie4300!',
    host: 'localhost',
    database: 'company_db',
  },
  console.log(`Connected to the company_db database.`)
);

pool.connect();

// Function to start application and call the mainMenuPrompt() function to see the user prompts
function init() {
  console.log('');
  console.log('Welcome to the Employee Manager Application by Vaughan Knouse!');
  console.log('---------------------------------------------------------------');
  mainMenuPrompts();
};

init();


// with main menu selection
function mainMenuPrompts() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'mainMenu',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update an Employee Role',
        ],
      },
    ])
    // Call the function depending on the user's main menu selection
    .then((response) => {
      if (response.mainMenu === 'View All Departments') {
        viewDepartments();
      } else if (response.mainMenu === 'View All Roles') {
        viewRoles();
      } else if (response.mainMenu === 'View All Employees') {
        viewEmployees();
      } else if (response.mainMenu === 'Add a Department') {
        addDepartment(mainMenu);
      } else if (response.mainMenu === 'Add a Role') {
        addRole(mainMenu);
      } else if (response.mainMenu === 'Add an Employee') {
        addEmployee(mainMenu);
      } else if (response.mainMenu === 'Update an Employee Role') {
        updateEmployeeRole(mainMenu);
      }
    });
}

// Function to view all departments
function viewDepartments() {
  pool.query('SELECT * FROM department;', function (err, { rows }) {
    if (err) {
      console.error('Error fetching departments:', err);
    } else {
      console.table(rows); // Display departments in a table format
    }
    mainMenuPrompts(); // Return to the main menu
  });
}

// Function to view all roles
function viewRoles() {}

// Function to view all employees
function viewEmployees() {}

// Function to add a department
function addDepartment() {}

// Function to add a role
function addRole() {}

// Function to add an employee
function addEmployee() {}

// Function to update an employee role
function updateEmployeeRole() {}
