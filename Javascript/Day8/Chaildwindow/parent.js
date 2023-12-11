


var button = document.getElementsByTagName("button")[0];

button.addEventListener("click",function()
{
    var child =window.open("./child.html",
    "",
    "width=320,height=320,left=0,right=0;");

    setTimeout(function(){
        child.close();
    },5000)

})