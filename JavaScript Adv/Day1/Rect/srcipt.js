function Rect(H , W)
{
    this.Height = H;
    this.Width = W;

}

Rect.prototype.area= function()
{
    return this.Width * this.Height * 2;
}

Rect.prototype.perimeter= function()
{
    return (this.Width + this.Height) * 2;
}

Rect.prototype.display= function()
{
    console.log("Height: " + this.Height );
    console.log("Width: " + this.Width );
    console.log("Area: " + this.area() );
    console.log("Perimeter: " + this.perimeter() );
}

var rec1 = new Rect(5,2);
var rec2 = new Rect(4,3);
var rec3 = new Rect(5,5);




rec1.display();
rec2.display();

rec3.display();

 //console.log(rec1);
// console.log(rec2);
// console.log(rec3);