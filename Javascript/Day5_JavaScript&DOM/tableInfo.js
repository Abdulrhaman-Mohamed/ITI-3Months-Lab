/*var Num_Person = prompt("Please Enter no of Persons")

function checkName(name)
{
    if(isFinite(name))
    {
    alert("Please enter Right Value")
    return true
    }

    if(name.length < 3 || name.length > 10)
    {
        alert("Should be name between 3 and 10 lettees")
        return true
    }

    return false
}

function checkNumber(num)
{
    if(!isFinite(num))
    {
    alert("Please enter Right Value")
    return true
    }

    if(num < 10 || num > 60)
    {
        alert("Should be Age between 10 and 60")
        return true;
    }

    return false
}

function getUserData(Num)
{
    try
    {
    var userName = new Array();
    var userAge = new Array();
    for(var i = 0 ; i < Num ; i++)
    {

        do{
            
            var promptName= prompt("Enter your Name")
        }while(checkName(promptName))
        
        userName.push(promptName);
        do{
            
            var promptAge= prompt("Enter your Age")
        }while(checkNumber(promptAge))

        userAge.push(promptAge)
    }

    for(var i = 0 ; i < Num ; i++)
    {
        var newRow = document.createElement("tr");
        var newCellName = document.createElement("td");
        var newCellAge = document.createElement("td");

        newCellName.innerHTML = userName[i];
        newCellAge.innerHTML = userAge[i];

        newRow.append(newCellName);
        newRow.append(newCellAge);
        document.getElementById("rows").appendChild(newRow);
        
    }
}
catch(error)
{
    throw error;
}


}

//debugger;
getUserData(Number(Num_Person))*/


///////////// New Solution ///////////////////
var numbers_users= prompt("Please Enter no of Persons");

while(!isFinite(numbers_users))
{
    alert("Please Enter Right Value !!!!");
    numbers_users= prompt("Please Enter no of Persons");
}


var data = [];


function checkName(name)
{
    if(isFinite(name))
    {
    alert("Please enter Right Value")
    return true
    }

    if(name.length < 3 || name.length > 10)
    {
        alert("Should be name between 3 and 10 lettees")
        return true
    }

    return false
}

function checkNumber(num)
{
    if(!isFinite(num))
    {
    alert("Please enter Right Value")
    return true
    }

    if(num < 10 || num > 60)
    {
        alert("Should be Age between 10 and 60")
        return true;
    }

    return false
}

function addrow(name , age)
{
    var newRow = document.createElement("tr");
    var newCellName = document.createElement("td");
    var newCellAge = document.createElement("td");

    newCellName.innerHTML = name;
    newCellAge.innerHTML = age;

    newRow.append(newCellName);
    newRow.append(newCellAge);
    document.getElementById("rows").appendChild(newRow);
}



function getUserData(Num)
{
    try
    {

    for(var i = 0 ; i < Num ; i++)
    {

        do{
            
            var promptName= prompt("Enter your Name")
        }while(checkName(promptName))

        data[i] = [];
        data[i][0] = promptName;
        do{
            
            var promptAge= prompt("Enter your Age")
        }while(checkNumber(promptAge))

        data[i][1] = promptAge;
    }

    data.forEach(function(person) {
        addrow(person[0], person[1]);

    /*userName.forEach(function(name , index) {
        var age = userAge[index];
        addrow(name, age);
    });*/
});
    }
catch(error)
{
    throw error;
}
}



getUserData(numbers_users);