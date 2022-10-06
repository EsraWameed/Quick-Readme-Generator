//added requirements, fs already exists, npm installed inquire
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//use inquirer to create prompts in an array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please insert your project title',
        validate: titleEnter => {
            if (titleEnter) {
                return true;
            } else {
                console.log('Please ensure a project title has been entered');
                return false;
            }
        }        
},
{
        type: 'input',
        name: 'description',
        message: 'Please provide a project description',
        validate: descEnter => {
            if (descEnter) {
                return true;
            } else {
                console.log('Please ensure a project description has been provided');
                return false;
            }
        }
},
{
        type: 'input',
        name: 'installation',
        message: 'What are the necessary steps required to install project?',
        validate: installEnter => {
            if (installEnter) {
                return true;
            } else {
                console.log('Please ensure that you have provided installation instructions');
                return false;
            }
        }
},
{
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
        validate: inputUse => {
            if (inputUse) {
                return true;
            } else {
                console.log('Please ensure that you have provided information on how to use this project');
                return false;
            }
        }
},
{
        type: 'input',
        name: 'contribution',
        message: 'Guidelines on how others can contribute to this project?',
        validate: contributeEnter => {
            if (contributeEnter) {
                return true;
            } else {
                console.log('Please ensure you have provided information to guide users on how they can contribute to project');
                return false;
            }
        }
},
{
        type: 'input',
        name: 'testing',
        message: 'How can this project be tested?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please ensure you have stated how this project can be tested');
                return false;
            }
        }
},
{
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['Apache_2.0', 'MIT', 'MPL_2.0', 'None'],
        validate: licenseEnter => {
            if (licenseEnter) {
                return true;  
            } else {
                console.log('A license needs to be selected');
                return false;
            }
        }     
},
{
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your github user name',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
},
{
        type: 'input',
        name: 'email',
        message: 'What is your email?',
},
];
// Create a function to write to README.md file and initialize the generatemarkdown function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};
//writing to readme file
function initialize() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};
initialize();

