var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var pra = document.getElementsByTagName("p")[0];
var inputs = document.getElementsByTagName("input");

// red.addEventListener("input",function(){
//     pra.style.color = `rgb(${red.value}, ${green.value},${blue.value})`;
// })
// blue.addEventListener("input",function(){
//     pra.style.color = `rgb(${red.value}, ${green.value},${blue.value})`;
// })
// green.addEventListener("input",function(){
//     pra.style.color = `rgb(${red.value}, ${green.value},${blue.value})`;
// })

for(var i = 0 ; i < inputs.length ;i++)
{
    
    inputs[i].addEventListener("input",function(){
        //debugger
        pra.style.color = `rgb(${inputs[0].value}, ${inputs[1].value},${inputs[2].value})`;
    })
}