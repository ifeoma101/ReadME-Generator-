const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type:"input",
    name: "title",
    messgae: "Please give a name to your project.",
},
{
    type:"input",
    name: "description",
    messgae: "Please give a description of the functionality and purpose of this project.",
},
{
    type:"checkbox",
    name: "licence",
    messgae: "Please select the license applicable to you project.",
    choices: ["none", ""]
},
{
    type:"input",
    name: "requirements",
    messgae: "Please list any project dependencies here.",
},
{
    type:"input",
    name: "usage",
    messgae: "Please state the languages or technologies used in this project.",
},
{
    type:"input",
    name: "creator",
    messgae: "Please write your GitHub username.",
},
{
    type:"input",
    name: "name",
    messgae: "Please state the languages or technologies used in this project.",
},
{
    type:"input",
    name: "name",
    messgae: "Please state your full name.",
},
{
    type:"input",
    name: "email",
    messgae: "Please provide a valid email address.",
},
{
    type:"input",
    name: "contributors",
    messgae: "Please state any contributors. List GitHub usernames.",
    default: "",
},
{
    type:"input",
    name: "test",
    messgae: "Please provide a walkthrough of required tests if applicable."
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
