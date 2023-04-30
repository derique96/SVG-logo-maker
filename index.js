const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text would you like to include (3 Charcters or less)?",
    },
    {
      type: "input",
      name: "textColor",
      message: "Which color would you like the text to be?",
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape.",
      choices: ["Triangle", "Square", "Circle"],
    },

    {
      type: "input",
      name: "shapeColor",
      message: "Which color would you like the shape to be?",
    },
  ])
  .then((answer) => {
    console.log("Answers:", answer);
    let shape;
    switch (answer.shape) {
      case "Circle":
        shape = new Circle(answer.shapeColor);
        break;
      case "Triangle":
        shape = new Triangle(answer.shapeColor);
        break;
      case "Square":
        shape = new Square(answer.shapeColor);
        break;
    }
    const solution = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render(answer.shapeColor)}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
          answer.textColor
        }">${answer.text}</text>
      </svg>`;
      const name = "logo.svg";
      writeFile(name, solution);
      return solution;
  });
  function writeFile(name, solution) {
    fs.writeFile(name, solution, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("logo created");
      }
    });
  }