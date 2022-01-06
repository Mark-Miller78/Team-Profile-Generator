class Employee{
    constructor (name='', ID, Email){
        this.Name=name;
        this.ID=ID;
        this.Email=Email;
    }

    getName(){
        return `${this.Name}`;
    }

    getId(){
        return `ID: ${this.ID}`;
    }

    getEmail(){
        return `Email: ${this.Email}`;
    }

    getRole(){
        return `Employee`;
    }
}

// Employee.prototype.getName=function(){
//     return `${this.Name}`;
// }

// Employee.prototype.getId=function(){
//     return `ID: ${this.ID}`;
// }

// Employee.prototype.getEmail=function(){
//     return `Email: ${this.Email}`;
// }

// Employee.prototype.getRole=function(){
//     return `Employee`;
// }

module.exports=Employee;