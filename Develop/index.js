const inquirer = require("inquirer");
const fs = require("fs");

const questions = [

    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "title",
        message: "What's the name of the project? "
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the project: "
    },
    {
        type: 'input',
        name: "table",
        message: "What's the table of contents? "
    },
    {
        type: "input",
        name: "installation",
        message: "Instructions to install: "
    },
    {
        type: "input",
        name: "usage",
        message: "What's the project's usage? "
    },
    {
        type:" input",
        name: "license",
        message: "license: "
    },
    {
        type: "input",
        name: "contributing",
        message:"Who's contributing? "
    },
    {
        type: "input",
        name: "test",
        message: "Test: "
    }



];


function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log("Answers:", answers);
    });

}
init();
