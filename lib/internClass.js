const Employee = require('./employeeClass')
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(school, linktoSchool) {
        this.school = school;
        this.linktoschool = linktoSchool

        super(name, id, position, manager, officeNumber,email);
        position = "Intern"

    }
}

const student = [
    {
        type: 'input',
        message: "What school is the Intern attending",
        name: 'school',
    },
    {
        type: 'input',
        message: "Provide the link to the Intern's school",
        name: 'linktoschool',
    },
];


const intern = new Intern(school, linktoSchool)
module.exports = {
    Intern, itern
};