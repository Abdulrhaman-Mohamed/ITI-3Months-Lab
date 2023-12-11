var name_ = document.getElementsByTagName("input")[0];
var age = document.getElementsByTagName("input")[1];
var email = document.getElementsByTagName("input")[2];
var rest_ = document.getElementsByTagName("button")[0];
var submit = document.getElementsByTagName("input")[3];
var tbody = document.getElementById("test");
var error = document.getElementsByTagName("span");
console.log(submit)
var counter = 0;
submit.addEventListener("click" , function(e){
if(!new RegExp(/[a-zA-Z]+/g ).test(name_.value))
{
    console.log("invaild naem")
    error[0].innerHTML="Inviald Name";
    e.preventDefault();
    counter++;
    
}
else
{
    
error[0].innerHTML="";

}

if(!new RegExp(/[0-60]+/g ).test(age.value))
{
    console.log("invaild age")
    error[1].innerHTML="Inviald age";
    e.preventDefault();
    counter++;
}
else
{
    error[1].innerHTML="";

}

if(!new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(email.value))
{
    console.log("invaild email")
    error[2].innerHTML="Inviald Email";
    e.preventDefault();
    counter++;
}
else
{
    error[2].innerHTML="";
}

if(counter == 0)
addrow(name_.value ,age.value, email.value );

counter=0;


e.preventDefault();

})
console.log(tbody);

function addrow(x,y,z)
{

    tbody.innerHTML+=`</tr><td>${x}</td><td>${y}</td><td>${z}</td></tr>`;
    //tbody.appendChild(row);

name_.value="";
age.value="";
email.value="";
}

rest_.addEventListener("click",function(e){
    e.preventDefault();
    name_.value="";
age.value="";
email.value="";
})






