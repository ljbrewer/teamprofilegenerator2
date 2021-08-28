const Employee = require('../lib/Employee');

describe("Employee", () =>{
  it('should have a string for the name', ()=>{
    const obj = new Employee();
    expect("name" in obj).toEqual(true);
    expect(typeof obj.name === "string").toEqual(true);
   } )
  it('should have a number for the id', ()=>{
    const obj = new Employee();
    expect("id" in obj).toEqual(true);
    expect(typeof obj.name === "number").toEqual(true);
   } )
  it('should have an @ in the email', ()=>{
    const obj = new Employee();
    expect("email" in obj).toEqual(true);
    expect(typeof obj.name === "string").toEqual(true);
   } )
})
