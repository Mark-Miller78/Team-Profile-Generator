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


module.exports=Employee;