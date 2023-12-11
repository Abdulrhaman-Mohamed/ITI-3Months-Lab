var input = document.createElement("input");
input.type = "text"; 

document.body.append(input);

input.addEventListener("keydown" , function(e){

    if((!isFinite(e.key)) && e.key != "Backspace"  )
    {
        e.preventDefault();
    }
    



})
