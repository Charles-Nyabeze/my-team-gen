// using Interns constructor 
const Intern = require('../lib/Intern');

// creating engineer object  
test('creates an Intern object', () => {
    const intern = new Intern('Charles', 999, 'charlesnnyabeze@gmail.com', 'carleton');
    
    expect(intern.school).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets intern school value', () => {
    const intern = new Intern('Charles', 999, 'charlesnnyabeze@gmail.com', 'carleton');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Charles', 999, 'charlesnnyabeze@gmail.com', 'carleton');

    expect(intern.getRole()).toEqual("Intern");
});