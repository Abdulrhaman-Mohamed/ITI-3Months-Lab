// Shape
function Shape(w, h) {
  if (this.constructor == Shape)
    throw "You can't Create from Parent Class or Abstract Class";

  Shape.Counter++;
  if (Shape.Counter > 1) throw "You can Create More Than one Object ";
  this.Width = w;
  this.Height = h;
}

Shape.prototype.Pre=function()
{
}

Shape.prototype.Area=function()
{ 
}


//Rectangle
function Rectangle(w, h) {
  if(this.constructor==Rectangle)
  Rectangle.Counter++;
  if (Rectangle.Counter > 1) throw "You can Create More Than one Object ";
  Shape.call(this, w, h);
}



Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.Pre=function()
{
    return (this.Width + this.Height) *2 ;
}

Rectangle.prototype.Area=function()
{
    return (this.Width * this.Height)  ;
}

//Square
function Square(w) {

  Rectangle.call(this, w, w);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.Pre=function()
{
    return (this.Width)*4 ;
}

Square.prototype.Area=function()
{
    return (this.Width * this.Width)  ;
}

//Erorr (Throw)
//var objShape = new Shape(50,10);

// Rectangle Test
var objRec = new Rectangle(5,10);
console.log(objRec.Pre());

//Square Test
var objSquare = new Square(5);
console.log(objSquare.Pre());

////////////Bouns//////////

// function Test(n,g)
// {
//     Test.Counter++;
//     if(Test.Counter>1)
//     throw "You can Create More Than one Object ";

//     this.name=n;
//     this.age=g;
// }

// Test.Counter =0;

// var objtest1=new Test("Temo",25);
// console.log(objtest1);
// var objtest1=new Test("Temo",25);

Shape.Counter = 0;
Rectangle.Counter = 0;

//var rec1 = new Rectangle(5,5);
//var shape1 = new Shape(5,5);
// var sq1 = new Square(5,5);
// var sq2 = new Square(5,5);
