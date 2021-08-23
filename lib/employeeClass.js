const inquirer = require('inquirer');


class Employee {
    constructor(name, position, office, manager,email) {
        this.name = name;
        this.id = Math.floor(Math.random()*99999 +1)+100000;
        this.position = position;
        this.office = office;
        this.manager= manager;
        this.email= email;
    }
}

Employee.prototype.getEmployeedata = () =>{
    inquirer.prompt([
            {   type: 'input',
                message: "What is the Employee's name",
                name: 'name',
            },
            {   type: 'input',
                message: "What is the Employee's position",
                name: 'position',
            },
            {   type: "List",
                message: "Who is the Employee's Manager",
                name: "Manager",
                choices: ["Laura",
                    "TJ",
                    "Dave",
                    "Elizabeth"
                ]
            },
            {   type: "input",
                message: "What is the Employee's email address",
                name: "email",
            },
        ]);            
        
        return employee
                    
}

const employee = new Employee(name ="Laura", position="Engineer",id=55, manager="TJ Rivas",email= "anymail@getmail.com" )

console.log(employee);
employee.getEmployeedata();
 
module.exports = {
Employee
};