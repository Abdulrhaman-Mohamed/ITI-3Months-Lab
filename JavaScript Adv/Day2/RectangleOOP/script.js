function Rectangle(w,h)
{
    this.width = w;
    this.height = h;
    Rectangle.Counter++;
}

Rectangle.prototype.Pre=function()
{
    return (this.width + this.height) *2 ;
}

Rectangle.prototype.Area=function()
{
    return (this.width * this.height)  ;
}

function Obj(w,h)
{
    Rectangle.call(this , w,h );
}

// Last Task
Rectangle.prototype.Display=function()
{
    console.log(this.Pre());
    console.log(this.Area());
    console.log(this.height);
    console.log(this.width);
}

//console.log(Rectangle.prototype);

//A-Override
Rectangle.prototype.toString=function()
{
    return`The Pre is ${this.Pre()} ,
    Area is ${this.Area()},
    Height is ${this.height} and
    Width is ${this.width}`
}

//B-Counter
Rectangle.Counter = 0;
Rectangle.getCounter=function(){
    return this.Counter;
}



var obj = new Rectangle(2,5);
var obj2 = new Rectangle(2,5);
//obj.Display()
//console.log(obj)
//console.log(Rectangle.prototype)
console.log(Rectangle.getCounter())






