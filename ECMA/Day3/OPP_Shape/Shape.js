export class Shape {
    constructor(){
        if(this.constructor == Shape)
        throw "This is an abstract class, you can't create an object from it."
    }
}


Shape.prototype.parameter = function(){}
Shape.prototype.area = function(){}
Shape.prototype.toString = function(){
    return `The parameter is ${this.parameter()} and the area is ${this.area()}`
}