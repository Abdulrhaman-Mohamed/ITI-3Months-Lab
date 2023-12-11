var array = new Array();

for(var i = 0 ; i<3;i++)
{
    var getarr= prompt(`please enter your number   ${i+1}  and remaining of numbers are ${3-i} `);
    if(!isFinite(getarr))
    {
        alert("please enter vaild input");
        i--;
    }
    else
    array.push(Number(getarr));
}
var sum = 0;
var multi = 1;
var div = array[0];

for(var i = 0; i<3 ; i++)
{
    sum += array[i];
    multi *= array[i];
    if(i>0)
    div /= array[i];
}

document.writeln(`<p> Sum of three Numbers <span>`+sum+`</span></p>`);
document.writeln(`<p> Multiplication of 3 values <span>`+multi+`</span></p>`);
document.writeln(`<p> division of 3 values <span>`+div+`</span></p>`);

