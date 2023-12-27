var arr = ["First" , "Second" , "Third"];

for(var i = 0 ; i < 3 ; i++)
{
    (function(){
        var x = i;
        $($("li")[x]).click(function () {    
            $("h1").text(`This is ${arr[x]}`);
//            $($("div")[0]).html($($("div")[0]).html() + "hellllo hamada"); //setter
            $("li").removeAttr("class"); 
            $($("li")[x]).attr("class", "active");   
        });

    })();

}