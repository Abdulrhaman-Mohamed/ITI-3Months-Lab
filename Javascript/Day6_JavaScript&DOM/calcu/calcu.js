var operation = "";
var lcd = document.getElementById("Answer");
//lcd.setAttribute("value","");

//console.log(eval(operation))

function EnterNumber(e)
{
    operation += e ;
    lcd.value += e;
    
}

function EnterOperator(e)
{
    operation += e;
   // console.log(e);
    lcd.value += e;
}

function EnterEqual()
{
    lcd.value = eval(operation);
}


function EnterClear()
{
    operation = "";
    lcd.value = "";
}