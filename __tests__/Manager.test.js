// using manager constructor 
const Manager = require('../lib/Manager');

// creating engineer object  
test('creates a manager object', () => {
    const manager = new Manager('Charles', 999, 'charlesnnyabeze@gmail.com', 454);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates a manager offoce Numbeer', () => {
    const manager = new Manager('Charles', 999, 'charlesnnyabeze@gmail.com', 454);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const manager = new Manager('Charles', 999, 'charlesnnyabeze@gmail.com', 454);

    expect(manager.getRole()).toEqual("Manager");
});