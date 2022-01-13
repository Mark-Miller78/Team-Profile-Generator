managerCard=(manager)=>{
    return `
    <div class="cell">
        <div class="card">
            <h2>${manager.Name}</h2>
            <i class="fas fa-clipboard-list"></i>
        </div>
    </div>
    `
}

organizeTeam = (employeeArr)=>{
    teamArray = []

    for(i=0; i<employeeArr.length; i++){
        const employee = employeeArr[i];
        const role = employee.getRole();

        if(role === "Manager"){
            const manager = managerCard(employee);

            teamArray.push(manager);
        }

        if(role === "Engineer"){
            const engineer = engineerCard(employee);

            teamArray.push(engineer);
        }

        if(role ==="Intern"){
            const intern = internCard(employee);

            teamArray.push(intern);
        }
    }

    cards = teamArray.join('')

    const generateTeam = generateHtml(cards);
    return generateTeam
}    

generateHtml =(cards)=>{
    return`
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1> Our Team! </h1>
        <header>
        <main>
            <div class="grid-container">
                <div class="grid-x grid-margin-x" id="team-cards">
                    ${cards}
                </div>
            </div>
`
}

module.exports = organizeTeam;