var xhr = new XMLHttpRequest();
var body = document.getElementById("body");
//console.log(body)

xhr.open("Get","https://jsonplaceholder.typicode.com/posts")
xhr.send();

xhr.addEventListener("readystatechange" , function(){
    if(xhr.status !== 400){
        if(xhr.readyState === 4)
        {
            var json = JSON.parse(xhr.response);
            json.forEach(function(element){
                body.innerHTML +=`<div class='post'>
                 <h1>${element.title}</h1>
                 <p>${element.body}</p>
                </div>` 
            });
        }
    }


})