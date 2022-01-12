const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createHtml = require("./utils/createHTML");

const inquirer = require("inquirer");
const fs = require("fs");

let constructingTeam = [];
let myTeam = [];

// Position arrays
let myManager = [];
let myEngineer = [];
let myIntern = [];


const buildTeamQuestions = () => {
    return inquirer.prompt([

        {
            type: "list",
            name: "employeeJob",
            message: 'Please select a employeeJob to add, or select "Done" to exit.',
            choices: ["Manager", "Engineer", "Intern", 'Done']
        },

    //Questions with .when property allow for conditional prompting
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            when: (answers) => answers.employeeJob !== 'Done'
        },

        {
            type: "input",
            name: "id",
            message: "Please enter employee's ID",
            when: (answers) => answers.employeeJob !== 'Done'
        },

        {
            type: "input",
            name: "email",
            message: "Please enter employee's email",
            when: (answers) => answers.employeeJob !== 'Done'
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the Manager's office number",
            when: (answers) => answers.employeeJob === "Manager"
        },

        {
            type: "input",
            name: "github",
            message: "Please enter the Engineer's GitHub",
            when: (answers) => answers.employeeJob === "Engineer"
        },

        {
            type: "input",
            name: "school",
            message: "Please enter a school for the Intern",
            when: (answers) => answers.employeeJob === "Intern"
        },
        // Resolving prompts promise.
    ]).then((answers) => {
        // If "Done" push answers to constructingTeam array, log the team, end questioneer and begin creating objects which fulfill user specifications
        if (answers.employeeJob === "Done") {

            constructingTeam.push(answers);

            console.log(constructingTeam);

            console.log("================================");

            console.log("Exiting employee info questioneer");

            employeeInitalize(constructingTeam);
            ;

        } else {
            // If not "Done" continue prompting user with questions and push answers to constructingTeam array
            constructingTeam.push(answers);

            console.log(answers);

            console.log("================================");

            console.log("Adding additional employees");

            return buildTeamQuestions();
        }
    });
};

// Creating new array(s) with .filter and populating them with employee info based off employment employeeJob

const employeeInitalize = employeeList => {

    myManager = employeeList.filter(employeeList => employeeList.employeeJob === 'Manager');

    myEngineer = employeeList.filter(employeeList => employeeList.employeeJob === 'Engineer');

    myIntern = employeeList.filter(employeeList => employeeList.employeeJob === 'Intern');

    //Loops through array myManager and creates new Manager object with user defined information

    myManager.forEach(managerData => {

        const parsedId = parseInt(managerData.id);

        const parsedOffice = parseInt(managerData.officeNumber)

        const makeManager = new Manager(managerData.name, parsedId, managerData.email, parsedOffice);

        myTeam.push(makeManager);
    });

    //Loops through array myEngineer and creates new Engineer object with user defined information

    myEngineer.forEach(engineerData => {

        const parsedId = parseInt(engineerData.id);

        const makeEngineer = new Engineer(engineerData.name, parsedId, engineerData.email, engineerData.github);

        myTeam.push(makeEngineer);

    });

    //Loops through array myIntern and creates new Intern object with user defined information

    myIntern.forEach(internData => {

        const parsedId = parseInt(internData.id);

        const makeIntern = new Intern(internData.name, parsedId, internData.email, internData.school);

        myTeam.push(makeIntern);

    });

};



const init = () => {

    buildTeamQuestions()
        // writeFileSync uses a promise insead of CB function *Found in Node miniproject*

        .then(() => fs.writeFileSync('./dist/index.html', createHtml(myTeam)))

        .then(() => console.log('HTML creation was a success!'))

        .catch((err) => console.error(err));
};



// const init = () => {
//     buildTeamQuestions()

//         .then((() => fs.writeFileSync('./dist/index.html', createHtml(myTeam))))

//     .then(() => console.log('HTML creation was a success!'))
//         .catch((err) => console.error(err));
// };




init();

