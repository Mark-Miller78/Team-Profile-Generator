const Engineer = require('../lib/Engineer');

test('creates Engineer object', ()=>{
    const engineer = new Engineer('Mark', 78, 'Mark7', 'Mark-Miller78');

    expect(engineer.Name).toBe('Mark');
    expect(engineer.ID).toEqual(expect.any(Number));
    expect(engineer.Email).toEqual(expect.any(String));
    expect(engineer.Github).toEqual(expect.any(String));
})

test('returns github username', ()=>{
    const engineer=new Engineer('Mark', 78, 'Mark7', 'Mark-Miller78');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.Github.toString()));
})

test('returns role as engineer', ()=>{
    const engineer = new Engineer('Mark', 78, 'Mark7', 'Mark-Miller78');

    expect(engineer.getRole()).toEqual('Engineer');
})