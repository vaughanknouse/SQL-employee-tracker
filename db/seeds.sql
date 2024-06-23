-- Data to populate the department table --
INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Sales'),
        ('Legal'),
        ('Finance');

-- Data to populate the role table --
INSERT INTO role (title, salary, department_id)
VALUES  ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Sales Lead', 100000, 2),
        ('Salesperson', 80000, 2),
        ('Lawyer', 190000, 3),
        ('Legal Team Lead', 250000, 3),
        ('Account Manager', 160000, 4),
        ('Accountant', 125000, 4);

-- Data to populate the employee table --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alice', 'Smith', 1, NULL),
        ('Bob', 'Johnson', 2, 1),
        ('Charlie', 'Williams', 3, NULL),
        ('David', 'Jones', 4, 3),
        ('Eve', 'Brown', 5, NULL),
        ('John', 'Doe', 6, 5),
        ('Susie', 'Allen', 7, NULL),
        ('Tom', 'Thumb', 8, 7);