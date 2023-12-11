var div = document.getElementsByTagName("div")[0];
var counter = -1; 
var imge2 = "./marble2.jpg";
var imge1 = "./marble1.jpg";
var image = document.getElementsByTagName("img");


var interval ;
 interval = setInterval(function(){
    
    if(counter >4 )
    {
        image[counter].src = imge1;
        counter=-1;
    }


else
{
    counter++;
    image[counter].src = imge2;
    if(counter>0)
    image[counter-1].src = imge1;
    
}
},700)
div.addEventListener("mouseover",function(){
    clearInterval(interval);
})

div.addEventListener("mouseleave",function(){
    //clearInterval(interval);
    interval =setInterval(function(){
    
        if(counter >4 )
        {
            image[counter].src = imge1;
            counter=-1;
        }
    
    
    else
    {
        counter++;
        image[counter].src = imge2;
        if(counter>0)
        image[counter-1].src = imge1;
        
    }
    },700)
})