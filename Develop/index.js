const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
generateMarkdown = require("./utils/generateMarkdown");


const questions = [

    {
        type: "input",
        name: "user",
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
        type: " input",
        name: "license",
        message: "license: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Who's contributing? "
    },
    {
        type: "input",
        name: "test",
        message: "Test: "
    }



];

function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log("User's answers: ", answers);
        const queryUrl = `https://api.github.com/users/${answers.user}`;
        axios
            .get(queryUrl)
            .then(response => {

                const user = response.data;
                const mark = generateMarkdown(answers, user)
                console.log(user);

                fs.writeFile('READ.md', mark, function (err) {
                    if (err) throw err;
                    console.log("Saved");
                });
            });
    });

}
init();
