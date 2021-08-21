const employee = require('../index');

describe(employee, () =>{
  it('should have a string for the name', ()=>{
     if(typeof employee.name === 'string'){
      expect(employee([name])).toBe(true);
     } else {
      expect(employee([name])).toBe(false);
     }
     })
    })
