var erorres = document.getElementsByTagName("span");
var submit = document.getElementsByTagName("button")[0];
var inputs = document.getElementsByTagName("input");
var form = document.getElementsByTagName("form")[0];

function nameVal(value,e )
{
    //debugger
    var checknull= nullVal(value ,e);
    erorres[0].innerText = checknull;
    if(isFinite(value))
    {
     erorres[0].innerText = "This Field is only characters";
     e.preventDefault();
    }
    
}

function addressVal(value,e)
{
    //debugger
    var checknull= nullVal(value,e);
    erorres[1].innerText = checknull;
   
}


function mobileVal(value ,e)
{
    console.log("ggg")
    //debugger
    var checknull= nullVal(value,e);
    erorres[3].innerText = checknull ;
    if(!isFinite(value))
    {
        e.preventDefault();
        erorres[3].innerText = "This Field is number only" ;
    }
    

}

function emailVal(value ,e )
{
    var checknull= nullVal(value,e);
    erorres[2].innerText = checknull ;
    if(!new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value))
    {
        e.preventDefault();
        erorres[2].innerText = "Please enter correct email";
    }
    
}

function genderVal(male , female ,e )
{
    if(!male && !female )
    {
        e.preventDefault();
        erorres[4].innerText = "This Field is Required" ;
    }


}

function nullVal(value ,e )
{
    if(value == "")
    {
        e.preventDefault();
        return "This Field is Required" ;
    }
    else
    return "";
}





submit.addEventListener("click",function(e){

    nameVal(inputs[0].value ,e);
    mobileVal(inputs[3].value,e);
    emailVal(inputs[2].value ,e);
    addressVal(inputs[1].value,e);
    genderVal(inputs[4].checked,inputs[5].checked,e);
    
})

// form.addEventListener("mouseleave",function(){
//     debugger
//     setTimeout(function(){
//         alert("Time Out");
//     },2000)
// })
var time ;
// form.addEventListener("mouseleave",function(){
// debugger
//     time = setTimeout(function(){
//         alert("Time Out ");
//     },5000);
// });

// form.addEventListener("focusout",function(){
//     debugger
//     if(time === undefined)
//     {
//         time = setTimeout(function(){
//             alert("Time Out ");
//         },30000);
//     }

// });



form.addEventListener("input",function(){
    debugger
    clearInterval(time);

    time = setTimeout(function(){
        alert("Time Out ");
    },30000);
   })