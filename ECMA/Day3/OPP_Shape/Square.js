import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle
{
    constructor(w)
    {
        super(w,w);
    }
}


Square.prototype.parameter = function(){
    return this.width * 4;
}