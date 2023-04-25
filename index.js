const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');

inquirer
    .prompt({
        type: 'input',
        name: 'text',
        message: 'What text would you like to include (3 Charcters or less)?',
    })

    .prompt({
        type: 'input',
        name: 'textColor',
        message: 'Which color would you like the text to be?'
    })

    .promp({
        type: 'input',
        name: 'shape',
        message: 'Please choose a shape.',
    })

    .prompt({
        type: 'input',
        name:'shapeColor',
        message: 'Which color would you like the shape to be?'
    })