const fs = require("fs");
const inquirer = require("inquirer");
const markdownGen = require("./utils/generateMarkdown.js");


//REDME should generate showing: Title, Description, License Badge(s), Table of Contents 

//Need to somehow create a table of contents with the following section titles that are links to the coordesponding info in the README
//Installation 
//Usage 
//License 
//Contributing 
//Tests 
//Questions 



// array of questions for user
const questions = [
    "What is the title of this project?",
    "Briefly describe this project: ",
    "What are the installation instructions for this project?",
    "What is the usage information for this project?",
    "Explain (if any) the license(s) for this project: ",
    "What are the contributing guidelines for this project?",
    "What are the test instructions for this project?",
    "What is your GitHub user name?",
    "What is your email?"

];

// function to write README file (copied and unsure what to do with the process.argv stuff)
function writeToFile(data) {
    fs.writeFile("README.md", markdownGen(data) + '\n', function(err) {

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
         name: "cats",
         message: "How many cats do you have?"
     }
 ]).then(function(res){
     console.log(res.title)
     writeToFile(res)
 })
}

// function call to initialize program
init()
