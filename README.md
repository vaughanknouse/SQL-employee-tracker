# SQL Employee Tracker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description ***


## Table of Contents
- [SQL Employee Tracker](#sql-employee-tracker)
  - [Description \*\*\*](#description-)
  - [Table of Contents](#table-of-contents)
  - [User Stor](#user-stor)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Technologies Used \*\*\*](#technologies-used-)
  - [Features \*\*\*](#features-)
  - [Installation \*\*\*](#installation-)
  - [Usage \*\*\*](#usage-)
    - [Screenshots: \*\*\*](#screenshots-)
  - [Tests](#tests)
  - [Links \*\*\*](#links-)
  - [Credits \*\*\*](#credits-)
  - [License](#license)
  - [Questions](#questions)


## User Stor
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Technologies Used ***
-	Node.js
-	Inquirer
-	PostgreSQL


## Features ***


## Installation ***
To install the SQL Employee Tracker, follow the following steps:

***EDIT HERE***
1.	Clone the repository to your local machine: `git clone https://github.com/vaughanknouse/SQL-employee-tracker.git`.
2.	Ensure that the current version of Node.js is installed. 
3.	Open the cloned repository in a CLI, such as Visual Studio Code.
4.	Navigate to the project directory in your terminal. 
5.	Initialize a project with `package.json` by typing `npm init -y` in the terminal.
6. Install `inquirer` version 8.2.4 by typing `npm inquirer@8.2.4` in the terminal.
7. Install other necessary dependencies by typing `npm i` in the command line to ensure that the `node-modules` folder is operating on your local device. 
8. To run the server, within the terminal, type the command `npm start` or `node server.js`.


## Usage ***
To use the SQL Employee Tracker, follow the following steps:

***EDIT HERE***
1.	Once the dependencies are installed, initialize the application with node.js by running the `index.js` file using the following command: `node index.js`.
2.	The application will prompt you to enter information about your project, such as the project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, GitHub username, and email address.
3.	Follow the `npm inquirer` prompt questions through sequential order within the directory and provide details for each section of the README.md file.
4.	After providing all the necessary information, the application will generate a professional README.md file named `README-generated.md` based on your input.
5.	Once the new README is generated, review it to ensure all the information is correctly included in the different sections.
6.	At your discretion, you may customize the `README-generated.md` file to fit your project’s needs. 
7.	In the future, you may also alter the prompted questions within the `index.js` and `generateMarkdown.js` to suit your needs. 
   

### Screenshots: ***
The following screenshots demonstrate the application's functionality and appearance:

Prompts made to the user via the inquirer command line interface:
![Shows screenshot of the prompts made to the user via the inquirer command line interface.](assets/images/user-input-screenshot.png)

Landing page with link to Notes page: ***
![Shows screenshot of the landing page with a clickable link to the notes page.](assets/images/landing-page-screenshot.png)


## Tests
There is no unit testing written for this application.


## Links ***
GitHub Repository: https://github.com/vaughanknouse/SQL-employee-tracker

Walkthrough Video Link: ***


## Credits ***
Used the following starter code and sources as tutorials and guidelines: ***

Also utilized the Xpert Learning Assistant for some portions of my code:
https://bootcampspot.instructure.com/courses/5293/external_tools/313


## License
This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).


## Questions
For any questions or feedback, please contact me via email at vaughanknouse@gmail.com.

Additionally, you can find me on GitHub at [vaughanknouse](https://github.com/vaughanknouse).
