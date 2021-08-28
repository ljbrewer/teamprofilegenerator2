const Intern = require('../lib/Intern');
const inquirer = require("./inquirer");

describe("Intern", () => {
    it('should have a string for the name', () => {
        const obj = new Intern();
        expect("school" in obj).toEqual(true);
        expect(typeof obj.school === string).toEqual(true);
    })
})
console.log("Intern test file")