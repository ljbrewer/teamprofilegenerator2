const employeeClass = require('../lib/employeeClass');
const inquirer = require("./inquirer");

describe("Employee", () =>{
  it('should have a string for the name', ()=>{
    const obj = new Employee();
    console.log("Employee test file")
    expect("name" in obj).toEqual(true);
    expect(typeof obj.name === string).toEqual(true);
   } )
})
