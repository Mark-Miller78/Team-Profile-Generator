const Intern = require('../lib/Intern');

test('creates Intern object', ()=>{
    const intern = new Intern('Mark', 78, 'Mark7', 'Clemson');

    expect(intern.Name).toBe('Mark');
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.Email).toEqual(expect.any(String));
    expect(intern.School).toEqual('Clemson');
})

test('returns school', ()=>{
    const intern=new Intern('Mark', 78, 'Mark7', 'Clemson');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.School.toString()));
})

test('returns role as Intern', ()=>{
    const intern = new Intern('Mark', 78, 'Mark7', 'Clemson');

    expect(intern.getRole()).toEqual('Intern');
})