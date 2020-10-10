const fs = require("fs");
const inquirer = require("inquirer");
const markdownGen = require("./utils/generateMarkdown.js");






// array of questions for user
const licenseOptions = ([
    "MIT",
    "APACHE 2.0",
    "GPL 3.0",
    "BSD 3",
    "NONE"
]);




// function to write README file (copied and unsure what to do with the process.argv stuff)
function writeToFile(data) {
    fs.writeFile("README.md", markdownGen(data), function(err) {

    if (err) {
        return console.log(err);
    }
});
}
//npm inquirer

// function to initialize program (all commented out inquirer code block copied and pasted from previous examples; unsure if this is how to correctly use this)
function init() {
 inquirer.prompt([
     {
         type: "input",
         name: "title",
         message: "What is the title of this project?"
     },
     {
         type: "input",
         name: "description",
         message: "Provide a description for this project: "
     },
     {
         type: "list",
         name: "licenses",
         message: "Identify (if any) the license for this project: ",
         choices: licenseOptions 
     },
    {    type: "input",
         name: "installation",
         message: "What are the installation instructions for this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contributing guidelines for this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What commands should be run to test this project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?" 
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }

 ]).then(function(res){
     writeToFile(res)
 })
}

// function call to initialize program
init();
