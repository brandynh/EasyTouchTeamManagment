const generateManager = (data) => {
    return `<div class="col s12 m4 l3">
    <div class="card hoverable">
        <div class="card-panel purple darken-4">
            <h2>${data.name}</h2>
            <h4>${data.getJobTitle()}<h4>
        </div>
        <div class="card-content">
            <li>${data.id}</li>
            <li><a href="mailto:${data.email}"> Email </a></li>
            <li>${data.officeNumber}</li>
        </div>
    </div>
</div>`
}

const generateEngineer = (data) => {
    return `<div class="col s12 m4 l3">
    <div class="card hoverable">
        <div class="card-panel purple darken-4">
            <h2> Employee ID: ${data.name}</h2>
            <h4>${data.getJobTitle()}<h4>
        </div>
        <div class="card-content">
            <li>${data.id}</li>
            <li><a href="mailto:${data.email}"> Email </a></li>
            <li><a href="https://github.com/${data.getgithub()}">GitHub</a></li>
        </div>
    </div>
</div>`
}

const generateIntern = (data) => {
    return `<div class="col s12 m4 l3">
    <div class="card hoverable">
        <div class="card-panel purple darken-4">
            <h2>${data.name}</h2>
            <h4>${data.getJobTitle()}<h4>
        </div>
        <div class="card-content">
            <li>${data.id}</li>
            <li><a href="mailto:${data.email}"> Email </a></li>
            <li>${data.getSchool()}</li>
        </div>
    </div>
</div>`
}

function generateTeam(employeeList) {
    let finalizedTeam;
    let renderEmployeeList = [];

    employeeList.forEach(employee => {
        // Switch statement generating roles based off user input information
        console.log(employee);
        const role = employee.getJobTitle();

        switch (role) {

            case 'Manager':

                const managerData = generateManager(employee);
                console.log(managerData);
                renderEmployeeList.push(managerData);

                break;

            case 'Engineer':

                const engineerData = generateEngineer(employee);
                renderEmployeeList.push(engineerData);

                break;

            case 'Intern':

                const internData = generateIntern(employee);
                renderEmployeeList.push(internData);

                break;

            default:
                'There was an error in the process!'
        }
        finalizedTeam = renderEmployeeList.join('');


    })

    return finalizedTeam;
    //call employee type specifc function
}


const createHTML = (data) => {
    return `<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Easy Touch Team Managment</title>
    </head>
    
    <body>
        <div class="card-panel cyan darken-3 center"><h1>Easy Touch Team Managment</h1></div>
            <div class="container">
                <div id='employees' class="row">
                ${generateTeam(data)}
            </div>
         </div>
        
        
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
        
</html>`
}

module.exports = createHTML;