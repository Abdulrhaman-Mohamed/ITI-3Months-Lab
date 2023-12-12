
var inputs = document.getElementsByTagName("input");
var tbody = document.getElementById("Tbody");
var submit = document.getElementById("submit");
var color = document.getElementById("color");
var colorValue ="black";
//console.log(submit)
//console.log(form)

submit.addEventListener("click",function(e){
    tbody.innerHTML="";
    //debugger
    for(let i=0;i<inputs[0].value ;i++ )
    {
        var tr = document.createElement("tr");
        for(let c =0 ; c < inputs[1].value ; c++)
        {
            var td = document.createElement("td");
            td.setAttribute("onclick","changeColor(this)");
            //td.innerText = i;
            tr.append(td);
        }
        //console.log(tr);
        tbody.append(tr);
    }
    e.preventDefault();
    
})
color.addEventListener("change",function(){
    colorValue = color.value;
    console.log(colorValue)
})

function changeColor(e)
{
    e.style.backgroundColor=colorValue;
    //console.log(e);
}