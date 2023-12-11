var Name = prompt("What is your name?");
var Color = prompt("Chose a color from the following: Red, Blue, Green");
let Colorarr = ["red", "blue", "green"];
if(Colorarr.includes(Color.toLowerCase()))
document.write("<h1 style='text-align: center;margin-top:40vh;border:4px solid "+Color+"'>Welcome <span style='color:"+Color+" ;'>"+Name+"</span></h1>");
else
document.write("<h1 style='text-align: center;margin-top:40vh;color:red; '> "+Name +" , You chose an invalid color !:(  </h1>");


