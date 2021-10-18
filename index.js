const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");

let constructingTeam = [];
let myManager = [];
let myEngineer = [];
let myIntern = [];
let myTeam = [];

const buildTeamQuestions = () => {
    return inquirer.prompt([

        {
            type: "list",
            name: "position",
            message: 'Please select a position to add, or select "Done" to exit.',
            choices: ["Manager", "Engineer", "Intern", 'Done']
        },

    //Questions with .when property allow for conditional prompting
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            when: (answers) => answers.position !== 'Done'
        },

        {
            type: "input",
            name: "id",
            message: "Please enter employee's ID",
            when: (answers) => answers.position !== 'Done'
        },

        {
            type: "input",
            name: "email",
            message: "Please enter employee's email",
            when: (answers) => answers.position !== 'Done'
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the Manager's office number",
            when: (answers) => answers.position === "Manager"
        },

        {
            type: "input",
            name: "gitHub",
            message: "Please enter the Engineer's GitHub",
            when: (answers) => answers.position === "Engineer"
        },

        {
            type: "input",
            name: "school",
            message: "Please enter a school for the Intern",
            when: (answers) => answers.position === "Intern"
        },
        // Resolving prompts promise.
    ]).then((answers) => {
        // If "Done" push answers to constructingTeam array, log the team, end questioneer and begin creating objects which fulfill user specifications
        if (answers.position === "Done") {

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

// Creating new array(s) with .filter and populating them with employee info based off employment position

const employeeInitalize = employeeList => {

    myManager = employeeGroup.filter(employeeList => employeeList.position === 'Manager');

    myEngineer = employeeList.filter(employeeList => employeeList.position === 'Engineer');

    myIntern = employeeList.filter(employeeList => employeeList.position === 'Intern');

}
