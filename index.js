const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type:"input",
    name: "title",
    message: "Please give a name to your project.",
},
{
    type:"input",
    name: "description",
    message: "Please give a description of the functionality and purpose of this project.",
},
{
    type:"checkbox",
    name: "license",
    message: "Please select the license applicable to you project.",
    choices: ["none", "MIT",]
},
{
    type:"input",
    name: "requirements",
    message: "Please list any project dependencies here.",
},
{
    type:"input",
    name: "usage",
    message: "Please state the languages or technologies used in this project.",
},
{
    type:"input",
    name: "creator",
    message: "Please write your GitHub username.",
},
{
    type:"input",
    name: "name",
    message: "Please state your full name.",
},
{
    type:"input",
    name: "email",
    message: "Please provide a valid email address.",
},
{
    type:"input",
    name: "contributors",
    message: "Please state any contributors. List GitHub usernames.",
    default: "",
},
{
    type:"input",
    name: "test",
    message: "Please provide a walkthrough of required tests if applicable."
},

];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File");
        writeToFile("./dist/README.md", generateMarkdown(responses ));
    });

}

// function call to initialize program
init();
