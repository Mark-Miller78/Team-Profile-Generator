const employee = require('./Employee');

class Manager extends employee{
    constructor (name='', ID, Email, Number){
        super(name, ID, Email);

        this.officeNumber =  Number
    }

    getRole(){
        return `Manager`;
    }
}



module.exports = Manager;