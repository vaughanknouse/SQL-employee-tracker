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
        addDepartment();
      } else if (response.mainMenu === 'Add a Role') {
        addRole();
      } else if (response.mainMenu === 'Add an Employee') {
        addEmployee();
      } else if (response.mainMenu === 'Update an Employee Role') {
        updateEmployeeRole();
      }
    });
}

// Function to view all departments
function viewDepartments() {
  pool.query('SELECT * FROM department;', function (err, { rows }) {
    if (err) {
      console.error('Error fetching departments', err);
    } else {
      console.table(rows); // Display departments in a table format
    }
    mainMenuPrompts(); // Return to the main menu
  });
}

// Function to view all roles
function viewRoles() {
  pool.query('SELECT role.id, role.title, department.name as department, role.salary FROM role JOIN department ON role.department_id = department.id', function (err, { rows }) {
    if (err) {
      console.error('Error fetching roles', err);
    } else {
      console.table(rows);  // Display roles in a table format
    }
    mainMenuPrompts();  // Return to the main menu
    }
  );
};

// Function to view all employees
function viewEmployees() {
  pool.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
    FROM employee 
    LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id 
    LEFT JOIN employee manager ON manager.id = employee.manager_id`,
    function (err, { rows }) {
      if (err) {
        console.error('Error fetching employees', err);
      } else {
        console.table(rows);  // Display employees in a table format
      }
      mainMenuPrompts();  // Return to the main menu
    }
  );
};

// Function to add a department
function addDepartment() {
  // Prompt the user for the department name
  inquirer.prompt([
      {
          type: `input`,
          message: `What is the name of the department?`,
          name: `newDepartmentName`,
      }
  ]).then((response) => {
      // Insert the new department into the database
      pool.query(
          `INSERT INTO department(name) VALUES ('${response.newDepartmentName}')`
      , (err, result) => {
          if (err) {
              console.error('Error adding new department', err);
              }
              console.log(`Added ${response.newDepartmentName} successfully to the database!`);
              // Return to the main menu
              mainMenuPrompts();
      })
  })
};

// Function to add a new role
async function addRole() {
  // Fetch all departments to provide as choices
  const dept = await pool.query('SELECT * FROM department');
  const deptChoices = dept.rows.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  // Prompt the user for the role details
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleTitle',
      message: 'What is the name of the role?',
    },
    {
      type: 'number',
      name: 'roleSalary',
      message: 'What is the salary of the role?',
    },
    {
      type: 'list',
      name: 'roleDepartment',
      message: 'To which department does the role belong?',
      choices: deptChoices,
    },
  ]).then((answers) => {
    const { roleTitle, roleSalary, roleDepartment } = answers;
    // Insert the new role into the database
    pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [roleTitle, roleSalary, roleDepartment], function (err, result) {
      if (err) {
        console.error('Error adding a new role:', err);
      } else {
        console.log(`Added ${answers.roleTitle} successfully to the database!`);
      }
      // Return to the main menu
      mainMenuPrompts();
    });
  });
};

// Function to add an employee
function addEmployee() {}

// Function to update an employee role
function updateEmployeeRole() {}
