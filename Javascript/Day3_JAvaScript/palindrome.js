do
{
    var word=prompt("Please Enter a word");

}while(isFinite(word));




var UporLow=confirm("Do you want to consider the case of the letters?");

if(!UporLow)
{
    word=word.toLowerCase();
}
var reverseWord=word.split("").reverse().join("");

if(word != reverseWord)
document.write("The word is not a palindrome");
else
document.write("The word is a palindrome");


