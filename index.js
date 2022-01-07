const inquirer = require('inquirer');
const fs = require('fs');

const promptUser=(employeeData)=>{
    if(!employeeData){
        employeeData=[];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message:"Please enter the employee's name.",
            validate: nameInput=>{
                if(nameInput){
                    return true;
                } else{
                    console.log("A name is required to continue!");
                    return false;
                }
            }
        },

        {
            type:'input',
            name:'ID',
            message:"Please enter the employee's ID number.",
            validate: IDInput=>{
                if(isNaN(IDInput)){
                    return "Please enter a number";
                }
                return true;
            }
        },

        {
            type:'input',
            name:'email',
            message:"Please enter the employee's email address.",
            validate: emailInput=>{
                if(emailInput){
                    return true;
                } else{
                    console.log("The employee's email is required to continue!");
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select the role of the Employee.',
            choices: ['Engineer', 'Intern', 'Manager'],
            default:['Manager'],
            validate: employeeInput=>{
                if(employeeInput){
                    return true;
                } else {
                    console.log('A role must be selected');
                    return false;
                }
            }
        },

        {
           type:'input',
           name:'managerInput',
           message:'Please enter the office number for the Manager.',
            when:({employeeType})=>{
                if(employeeType === 'Manager'){
                    return true;
                } else{
                    return false
                }
            },
            validate: managerInput=>{
                if(isNaN(managerInput)){
                    return "Please enter a number";
                }
                return true;
            }

        },

        {
            type: 'input',
            name: 'engineerInput',
            message: "Please enter the enginee's GitHub username",
            when:({employeeType})=>{
                if(employeeType === 'Engineer'){
                    return true;
                } else{
                    return false;
                }
            },
            validate: engineerInput=>{
                if(engineerInput){
                    return true;
                } else{
                    console.log('Please enter the GitHub account.');
                    return false;
                }
            }
        },

        {
            type:'input',
            name:'internInput',
            message:"Please enter the school the intern attends",
            when:({employeeType})=>{
                if(employeeType === 'Intern'){
                    return true;
                }else{
                    return false;
                }
            },
            validate: internInput=>{
                if(internInput){
                    return true;
                }else{
                    console.log('Please enter a school.');
                    return false;
                }
            }

        },

        {
            type:'confirm',
            name:'confirmAddEmployee',
            message:'Would you like to add another employee?',
            default: false
        },
    ])

    .then(employee =>{
        employeeData.push(employee);
        if(employee.confirmAddEmployee){
            return promptUser(employeeData);
        } else{
            return employeeData
        }
    });
}

promptUser()
    .then(answers=>{
        console.log(answers);
    })