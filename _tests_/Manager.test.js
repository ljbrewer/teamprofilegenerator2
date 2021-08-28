const Manager = require('../lib/Manager');

describe("Manager", () => {
    it('should have a string for the name', () => {
        const obj = new Manager();
        expect("name" in obj).toEqual(true);
        expect(typeof obj.name === "string").toEqual(true);
    })
})