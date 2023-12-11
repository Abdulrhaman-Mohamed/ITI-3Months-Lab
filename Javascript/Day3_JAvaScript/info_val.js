




//console.log(new RegExp("^[a-zA-Z]{1,}$").test(Name));
//console.log(new RegExp("^[0-9]{8}$").test(phone));
//console.log(new RegExp("^01[0-2][0-9]{8}$").test(mobile));

//console.log(new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$").test(email));
var Name = prompt("Enter your name");
do
{
    alert("Please Enter Vaild Name");
    var Name = prompt("Enter your name");
}while(!(new RegExp("^[a-zA-Z]{1,}$").test(Name)))

var phone = prompt("Enter your phone number length is 8 ");
do
{
    alert("Please Enter Vaild Phone Number");
    var phone = prompt("Enter your phone number length is 8 ");
}while(!(new RegExp("^[0-9]{8}$").test(phone)))


var mobile = prompt("Enter your mobile number start with (010 or 011 or 012)");
do
{
    alert("Please Enter Vaild Mobile ");
    var mobile = prompt("Enter your mobile number start with (010 or 011 or 012)");
}while(!(new RegExp("^01[0-2][0-9]{8}$").test(mobile)))


var email = prompt("Enter your email address start with (a-z or A-Z or 0-9)@gmail.com");

do
{
    alert("Please Enter Vaild Email ");
    var email = prompt("Enter your email address start with (a-z or A-Z or 0-9)@gmail.com");

}while(!(new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$").test(email)))

document.write("<p>Name is <span> "+Name+"</span></p><br>");
document.write( "<p>Phone is <span>" + phone+"</span></p><br>");
document.write("<p>Mobile is <span> "+mobile+"</span></p><br>");
document.write("<p>Email is <span>"+email+"</span></p><br>");
