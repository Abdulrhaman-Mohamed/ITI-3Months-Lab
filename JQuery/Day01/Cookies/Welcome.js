window.addEventListener("load",function (){
    if(!hasCookie("GeneralCounter"))
    {
        setCookie("GeneralCounter" , 0 , new Date());
    }
var spans = this.document.getElementsByTagName("span");

var img = this.document.getElementsByTagName("img")[0];
//debugger
var param =  new URLSearchParams(window.location.search);
var username = param.get("username");
var user =JSON.parse(getCookie(username));
img.src = `./images/${user.gender}.jpg`;

increaesGeneral_user(user);
for(var i = 0 ; i < 2 ; i++)
{
    spans[i].innerText = user[spans[i].getAttribute("name")];
}
spans[2].innerText = user[`${user.username}_counter`];
 


})

function increaesGeneral_user(user)
{
    var p = this.document.getElementsByTagName("p");
    var counter = getCookie("GeneralCounter");

    setCookie("GeneralCounter",++counter , new Date());
    p[1].innerText = `The total of visited my website is ${counter}`;
    ++user[`${user.username}_counter`];
    setCookie(user.username , JSON.stringify(user) , new Date());
}