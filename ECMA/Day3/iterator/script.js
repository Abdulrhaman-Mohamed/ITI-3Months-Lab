let Myobj = {
    name:"Temo mohamed",
    age:22,
    address:"11 street - Elarbien - suez",
    [Symbol.iterator]: objIterator,
}

function* objIterator()
{
    var keys = Object.keys(this);

    for(var i = 0; keys.length > i ; i++)
    {
        yield [keys[i],this[keys[i]]]
    }
}


for (const i of Myobj) {
    console.log(i);
}
var res = Myobj[Symbol.iterator]();
for(var i = 0 ; i < 2 ; i++)
{
    console.log(res.next())
}

var arrr = [...Myobj];

console.log(arrr);


