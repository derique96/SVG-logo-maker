const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');

inquirer
    .prompt({
        type: 'input',
        name: 'text',
        message: 'What text would you like to include (3 Charcters or less)?',
    }.then((answer) => {
        console.log('Answer:', answer.text);

    }),

    { 
         type: 'input',
        name: 'textColor',
        message: 'Which color would you like the text to be?'
    }.then((answer) => {
        console.log('Answer', answer.textColor);
    }),

    {
        type: 'input',
        name: 'shape',
        message: 'Please choose a shape.',
        choices: ['Triangle', 'Square', 'Circle']
    }.then((answer) => {
        console.log('Answer', answer.shape);
    }),

    {  type: 'input',
    name:'shapeColor',
    message: 'Which color would you like the shape to be?'
    }.then((answer) => {
        console.log('Answer', answer.shapeColor);
    }));