const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs/promises');
inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to include (3 Charcters or less)?',
    },
    { 
        type: 'input',
        name: 'textColor',
        message: 'Which color would you like the text to be?'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Please choose a shape.',
        choices: ['Triangle', 'Square', 'Circle']
    },

    {  type: 'input',
    name:'shapeColor',
    message: 'Which color would you like the shape to be?'
    },

    ]).then(answer => {
        console.log('Answers:',answer);
    });
