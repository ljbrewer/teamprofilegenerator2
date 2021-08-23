const employeeClass = require('../lib/employeeClass');
const inquirer = require("./inquirer");

describe("Manager", () => {
    it('should have a string for the name', () => {
        const obj = new Employee();
        expect("name" in obj).toEqual(true);
        expect(typeof obj.name === string).toEqual(true);
    })
})
console.log("Manager test file")
