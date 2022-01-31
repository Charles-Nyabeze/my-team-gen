const Employee = require('./Charecter')

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports =  Engineer

//Reqs
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'