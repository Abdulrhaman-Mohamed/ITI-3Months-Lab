
function* fibonacciToNumber(myEndNum)
{
    var cur = 0 , prev = 1;
    while(cur < myEndNum)
    {
        yield cur;
        cur += prev;
        prev = cur;
    }
}


function* fibonacciUntilLength(mylen)
{
    var cur = 0 , prev = 1;
    for(var i = mylen ; i > 0 ; i--)
    {
        yield cur;
        cur += prev;
        prev = cur;
    }
}


var getresult = fibonacciToNumber(10);

console.log(getresult.next());
console.log(getresult.next());
console.log(getresult.next());
console.log(getresult.next());
console.log(getresult.next());
console.log(getresult.next());



// var getresult2 = fibonacciUntilLength(6);

// console.log(getresult2.next());
// console.log(getresult2.next());
// console.log(getresult2.next());
// console.log(getresult2.next());
// console.log(getresult2.next());
// console.log(getresult2.next());
// console.log(getresult2.next());