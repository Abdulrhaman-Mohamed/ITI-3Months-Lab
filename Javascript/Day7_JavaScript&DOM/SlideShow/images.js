var images =["./1.jpg" ,"./2.jpg","./3.jpg","./4.jpg","./5.jpg","./6.jpg"]
var img = document.getElementsByTagName("img")[0];
var btns = document.getElementsByTagName("button");
var counter = 0;
var interval ;

btns[0].addEventListener("click", function(){


    if(counter >= 5)
    {
        counter = 5;
    }
    else
    {
        counter++;
        img.src=images[counter];

    }
    console.log(counter);
})


btns[3].addEventListener("click",function(){


    if(counter == 0)
    {
        counter = 0;
    }
    else
    {
        counter--;
        img.src=images[counter];
    }
    console.log(counter);
})

btns[1].addEventListener("click" , function(){

    console.log(this);
     interval = setInterval(checkcount, 500);
});

btns[2].addEventListener("click" , function(){
    clearInterval(interval);
})


function checkcount()
{ 
    console.log(counter);
    if(counter == 5)
    {
        counter= 0;
    }
    else
    {
        counter++;
    }

    img.src=images[counter];
}