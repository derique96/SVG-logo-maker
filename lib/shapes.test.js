
const shapes = require('./shapes.js');
const {Triangle, Circle, Square} = shapes;

// describe('Circle', () => {
//     describe("color", () => {
//         it('This shape color should return green ', () => {
//             const color = "green";
//             const circle = new Circle('green');

//             expect(color).toEqual(circle.shapeColor);
//         });
//     });

//     // describe
// });

describe('Circle', () => {
        test('Should render a green circle',() => {
            const shape = new Circle("green",);
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');

        });
});

describe('Triangle', () => {
    test('Should render a green Triangle',() => {
        const shape = new Triangle("green",);
        expect(shape.render()).toEqual('<polygon points="150,20 75,180 225,180" fill="green" />');

    });
});

describe('Square', () => {
    test('Should render a green square',() => {
        const shape = new Square("green",);
        expect(shape.render()).toEqual('<rect x="60" y="40" width="180" height="120" fill="green" />');

    });
});