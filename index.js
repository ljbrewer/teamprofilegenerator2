// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const employeedata = [
    {
        type: 'input',
        message: "What is the Employee's name?",
        name: 'name'
    },
    {
        type: "input",
        message: "What is the Employee's ID number?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is the Employee's email address",
        name: "email",
    },
    {
        type: "list",
        message: "What type of employee are you creating?",
        name: "choice",
        choices: [
            "Manager",
            "Intern",
            "Engineer"
        ]

    }
];

const promptEmployee = () => {
    return inquirer.prompt(employeedata)
}

const newEmployee = () => {
    promptEmployee()
        .then((answers) => {
            new Employee(answers)
            switch (answers.choice) {
                case "Intern": newIntern();
                    break;
                case "Manager": newManager();
                    break;
                case "Engineer": newEngineer();
                    break;
                default: ""
                    break;

            }

        })
        .catch((err) => console.error(err));
};

const engineer = [
    {
        type: 'input',
        message: "What is the Engineer's GitHub username",
        name: 'github',
    },
];
const promptEngineer = () => {
    return inquirer.prompt(engineer)
}

const newEngineer = () => {
    promptEngineer()
        .then((answers) => new Engineer(answers))
        .then(() => console.log('Successfully created Engineer'))
        .catch((err) => console.error(err));
};

const intern = [
    {
        type: 'input',
        message: "What school is the Intern attending",
        name: 'school',
    },
];
const promptIntern = () => {
    return inquirer.prompt(intern)
}

const newIntern = () => {
    promptIntern()
        .then((answers) => new Intern(answers))
        .then(() => console.log('Successfully created Intern'))
        .catch((err) => console.error(err));
};

const manager = [
    {
        Type: "input",
        message: "Is this a Manager?",
        name: "manager"
    }
]
const promptManager = () => {
    return inquirer.prompt(manager)
}

const newManager = () => {
    promptManager()
        .then((answers) => new Manager(answers))
        .then(() => console.log('Successfully created a Manager'))
        .catch((err) => console.error(err));
};

newEmployee();

// switch (choice) {
//     case "Intern": newIntern();
//         break;
//     case "Manager": newManager();
//         break;
//     case "Engineer": newEngineer();
//         break;
//     default: ""
//         break;

// };




