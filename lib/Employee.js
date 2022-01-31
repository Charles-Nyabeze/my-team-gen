// employee constructor/class 
class Employee {
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email 
    }
//get employee data
    getName(){
        return this.name
    }

    getId(){
        return this.id
    }   

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Employee' 
    }
};

// to be exported 
module.exports = Employee; 

//reqs

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'