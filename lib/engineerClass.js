const Employee = require('./employeeClass')
const inquirer = require('inquirer');


class Engineer extends Employee {
    constructor(githubUsername,githubRepository) {
        this.githubUsername = githubUsername;
        this.githumRepository = githubRepository

        super(name,id,position,manager,officeNumber,email);
        position = "Engineer"

    }
}

const developer = [
    {
        type: 'input',
        message: "What is the Engineer's GitHub username",
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: "Provide the link to the  Engineer's GitHub repository",
        name: 'githubRepository',
    },
];


const engineer = new Engineer(github,githubRepository)
module.exports = {
    Engineer, engineer
};