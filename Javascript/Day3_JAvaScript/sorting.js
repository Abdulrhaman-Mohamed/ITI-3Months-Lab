var array = new Array();
for(var i = 0 ; i<5;i++)
{
    var getarr= prompt(`please enter your number of array with index  ${i}  and remaining of array is   ${5-i} `);
    if(!isFinite(getarr))
    {
        alert("please enter vaild input");
        i--;
    }
    else
    array.push(Number(getarr));
}
document.writeln(`<P>The array is <span> `+ array+`</span></p>`);
document.writeln(`<P> after Ascending `+ array.sort((a, b) => a - b)+`</span></p>`);
document.writeln(`<P>after Descending `+ array.reverse()+`</span></p>`);
//alert(array.sort());
//alert(array.reverse());
