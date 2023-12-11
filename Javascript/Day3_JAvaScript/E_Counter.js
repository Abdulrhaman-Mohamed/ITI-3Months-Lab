do
{
    var word=prompt("Please Enter a String");

}while(isFinite(word));

//console.log(word.toLowerCase().split("e").length-1);
console.log((word.match(new RegExp("e", "g"))).length);
document.write((word.match(new RegExp("e", "g"))).length);