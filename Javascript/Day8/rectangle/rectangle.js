var rectangle = 
{
    width : 0,
    height : 0,
    areaCalcu:function ()
    {
        return((this.width + this.height ) * 2);
    }
,
    perimeterCalcu: function()
    {
        return((this.width * this.height ));
    }
,

displayInfo: function()
{
    console.log("Height",this.height);
    console.log("Width",this.width);
    console.log("Area",this.areaCalcu());
    console.log("Perimeter",this.perimeterCalcu());
}
}

rectangle.width= 15;
rectangle.height = 2;

rectangle.displayInfo()