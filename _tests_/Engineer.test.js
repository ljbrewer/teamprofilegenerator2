const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it('should have a string for the name', () => {
        const obj = new Engineer();
        expect("github" in obj).toEqual(true);
        expect(typeof obj.github === string).toEqual(true);
    })
})
console.log("Engineer test file")