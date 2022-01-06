const Manager = require('../lib/Manager');

test('creates manager object', ()=>{
    const manager = new Manager('Mark', 78, 'Mark7', 619);

    expect(manager.Name).toBe('Mark');
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.Email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})
