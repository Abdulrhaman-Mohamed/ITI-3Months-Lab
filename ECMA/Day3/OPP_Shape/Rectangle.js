import { Shape } from "./Shape.js";


export class Rectangle extends Shape {
    constructor(w , h )
    {
        super();
        this.width = w;
        this.height = h;

    }
}

Rectangle.prototype.area = function(){
    return this.width * this.height ; 
}


Rectangle.prototype.parameter = function(){
    return (this.width + this.height)*2 ; 
}