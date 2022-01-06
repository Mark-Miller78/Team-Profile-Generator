const Employee = require('../lib/Employee');

test('creates an employee object', ()=>{
    const employee = new Employee('Mark', 78, 'Mark7');

    expect(employee.Name).toBe('Mark');
    expect(employee.ID).toBe(expect.any(Number));
    expect(employee.Email).toBe(expect.any(String));
});
