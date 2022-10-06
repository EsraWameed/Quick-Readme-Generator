//added requirements, fs already exists, npm installed inquire
const fs = require('fs');
const inquirer = require('inquirer');

//use inquirer to create prompts in an array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please insert your project title'

},
{
        type: 'input',
        name: 'description',
        message: 'Please provide a project description',
},
{
        type: 'input',
        name: 'installation',
        message: 'What are the necessary steps required to install project?',
},
{
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
},
{
        type: 'input',
        name: 'contribution',
        message: 'Guidelines on how others can contribute to this project?',
},
{
        type: 'input',
        name: 'testing',
        message: 'How can this project be tested?',
},
{
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['Apache_2.0', 'MIT', 'MPL_2.0', 'None'],  
},
{
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your github user name',
},
{
        type: 'input',
        name: 'email',
        message: 'What is your email?',
},
];
