import { Shape } from "./Shape.js";

export class Circle extends Shape 
{
    constructor(semi_w)
    {
        super();
        this.diamatar = semi_w ;
    }
}


Circle.prototype.area= function(){
    return Math.pow(this.diamatar,2) * Math.PI  ;
}


Circle.prototype.parameter= function(){
    return 2 * this.diamatar * Math.PI ;
}
