# SQL Employee Tracker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
Managing employee data effectively is crucial for any organization’s operational success. To simplify this process, this week’s UT Austin Coding Boot Camp challenge involved building an employee tracker command-line application from scratch using Node.js, Inquirer, and PostgreSQL. This application allows users, most notably business managers, to manage a company’s employee database more easily and efficiently, which helps with business organization and planning.

As a powerful command-line application, the SQL Employee Tracker streamlines the efficient management of a company’s employee database using Node.js, Inquirer, and PostgreSQL. This application offers functionalities to view, add, update, and delete departments, roles, and employees, as well as to perform additional operations such as viewing employees by manager or department and calculating departmental budgets. Additionally, this application simplifies the process of adding new entries or updating employees’ roles through intuitive prompts powered by Inquirer. By combining Node.js for runtime execution, Inquirer for user interaction, and PostgreSQL for database connectivity and data storage, the SQL Employee Tracker application offers intuitive commands and structured views to handle the complexities of employee management seamlessly.

The motivation behind building the SQL Employee Tracker application stemmed from the need to enhance organizational efficiency and streamline administrative tasks related to workforce management. Traditional methods of managing employee data often involve manual updates and disparate systems, leading to inefficiencies and potential errors. This application seeks to automate and centralize these processes, enabling users to focus more on strategic decision making rather than mundane administrative tasks.

Offering a comprehensive suite of functionalities, the SQL Employee Tracker empowers users, especially business owners and administrators, to efficiently organize, update, and retrieve critical information about departments, roles, and employees within their organization. Overall, this application combines reliability with scalability, catering to businesses of various sizes and organizational structures. By leveraging the strengths of Node.js, Inquirer, and PostgreSQL, this application provides a functional and user-friendly employee management system which simplifies database management while empowering businesses to streamline their operations and make informed decisions.



## Table of Contents
- [SQL Employee Tracker](#sql-employee-tracker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Technologies Used \*\*\*](#technologies-used-)
  - [Features](#features)
  - [Installation \*\*\*](#installation-)
  - [Usage \*\*\*](#usage-)
    - [Screenshots: \*\*\*](#screenshots-)
  - [Tests](#tests)
  - [Links \*\*\*](#links-)
  - [Credits \*\*\*](#credits-)
  - [License](#license)
  - [Questions](#questions)


## User Story
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


## Features
- **Comprehensive Views**: Provides detailed and structured views of departments, roles, and employees in a tabular format.
- **Efficient Data Entry**: Allows for easy addition of new departments, roles, and employees with guided prompts.
- **Role and Manager Updates**: Enables seamless updates of employee roles and managers to reflect organizational changes.
- **Data Filtering**: Facilitates filtering of employee data by department or manager, aiding in focused analysis and reporting.
- **Budget Calculation**: Computes the total salary budget for selected departments, aiding in financial planning.
- **Data Deletion**: Supports deletion of departments, roles, and employees, ensuring database maintenance and cleanup.
- **User-Friendly Interface**: Offers an intuitive command-line interface (CLI) powered by Inquirer.js for effortless interaction.


## Installation ***
To install the SQL Employee Tracker, follow the following steps:
1.	Clone the repository to your local machine: `git clone https://github.com/vaughanknouse/SQL-employee-tracker.git`.
2.	Ensure that the current version of Node.js is installed. 
3.	Open the cloned repository in a CLI, such as Visual Studio Code.
4.	Navigate to the project directory in your terminal. 
5.	Initialize a project with `package.json` by typing `npm init -y` in the terminal.
6. Install `inquirer` version 8.2.4 by typing `npm i inquirer@8.2.4` in the terminal.
7. Install the `pg` package by typing `npm install pg` in the terminal.
8. Install other necessary dependencies by typing `npm i` in the command line to ensure that the `node-modules` folder is operating on your local device. 

***EDIT HERE***
1. To run the server, within the terminal, type the command `npm start` or `node server.js`.


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
![Shows screenshot of the prompts made to the user via the inquirer command line interface.](assets/images/user-input-screenshot1.png)

![Shows screenshot of the prompts made to the user via the inquirer command line interface.](assets/images/user-input-screenshot2.png)

![Shows screenshot of the prompts made to the user via the inquirer command line interface.](assets/images/user-input-screenshot3.png)

## Tests
There is no unit testing written for this application.


## Links ***
GitHub Repository: https://github.com/vaughanknouse/SQL-employee-tracker

Walkthrough Video Link: ***


## Credits ***
Used the following starter code and sources as tutorials and guidelines: ***

PostgreSQL Shell Documentation: https://www.postgresql.org/docs/current/app-psql.html

Node.js `pg` Package: https://www.npmjs.com/package/pg


Also utilized the Xpert Learning Assistant for some portions of my code:
https://bootcampspot.instructure.com/courses/5293/external_tools/313


## License
This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).


## Questions
For any questions or feedback, please contact me via email at vaughanknouse@gmail.com.

Additionally, you can find me on GitHub at [vaughanknouse](https://github.com/vaughanknouse).
