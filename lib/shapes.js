class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render(){
        return "";
    }
};
class Triangle extends Shapes {
    constructor(shapeColor,text,textColor){
        super(shapeColor)
        this.text = text
        this.textColor = textColor
    }
    render(){
        return `<polygon points="150,20 75,180 225,180" fill="${this.shapeColor}" />`;
    }
};
class Circle extends Shapes {
    constructor(shapeColor, text, textColor){
        super(shapeColor)
        this.text = text
        this.textColor = textColor
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
};

class Square extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor)
        this.text = text
        this.textColor = textColor 
    }
    render(){
        return `<rect x="60" y="40" width="180" height="120" fill="${this.shapeColor}" />`;
    }
};

module.exports = {Triangle, Circle, Square};