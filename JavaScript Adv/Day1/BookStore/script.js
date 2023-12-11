function Book(n,p,a)
{
    this.name= n;
    this.price=p;

    this.author=a;

}

function Author(n,e)
{
    this.name= n;
    this.email=e;
    
}
// var author = new Author("hamada","aaa@aa.cco");
// var book = new Book("aaa",200,author);
// console.log(book);

// Variables 
var numbook= document.getElementById("bookNum");
var btns = document.getElementsByTagName("button");
var divs = document.getElementsByTagName("div");

var inputs = document.getElementsByTagName("input");
var erorres = document.getElementsByTagName("span");
var tbody= document.getElementById("tbody");

var trs = tbody.getElementsByTagName("tr");
var arr = [];
var index = 0;
var remover = 0;





function nameVal(value,e,i)
{
    
    var checknull= nullVal(value ,e);
    erorres[i].innerText = checknull;
    if(isFinite(value) && value !=="")
    {
     erorres[i].innerText = "This Field is only characters";
     e.preventDefault();
    }
    
}


function nullVal(value ,e )
{
    if(value == "")
    {
        e.preventDefault();
        return "This Field is Required" ;
    }
    else
    return "";
}

function emailVal(value,e)
{
    var checknull= nullVal(value,e);
    erorres[3].innerText = checknull ;
    if(!new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value) && value !=="")
    {
        e.preventDefault();
        erorres[3].innerText = "Please enter correct email";
    }
    
}


function numberVal(value ,e)
{
    //debugger
    var checknull= nullVal(value,e);
    erorres[1].innerText = checknull;
    if(!isFinite(value))
    {
        e.preventDefault();
        erorres[1].innerText = "This Field is number only" ;
    }
    

}

function rest()
{
    inputs[1].value="";
    inputs[2].value="";
    inputs[3].value="";
    inputs[4].value="";
}





btns[0].addEventListener("click",function(){

    if(!isFinite(numbook.value))
    {
        window.alert("Please enter No of books")
    }
    else if(numbook.value ==="")
    {
        window.alert("This field must be required ")
    }
    else
    {
        divs[1].classList.toggle("hidden");
        divs[2].classList.toggle("hidden");
    }
})

btns[1].addEventListener("click",function(e){

    
        nameVal(inputs[1].value ,e,0);
        numberVal(inputs[2].value,e);
        nameVal(inputs[3].value,e , 2);
        emailVal(inputs[4].value ,e);



            if(erorres[0].innerText.length===0 
                && erorres[1].innerText.length===0 
                && erorres[2].innerText.length===0 
                && erorres[3].innerText.length===0)
                {
                    arr[index] = new Book(inputs[1].value ,
                        inputs[2].value,
                        new Author(inputs[3].value,
                            inputs[4].value));
                        rest();
                        index++;
                        alert(`You Create ${index} Book`);
                        console.log(arr);


                }
                // <td><input  value="${new Date().toLocaleDateString()}"  disabled></td>
            if(Number(numbook.value) ===index)
            {

                divs[2].classList.toggle("hidden");
                divs[3].classList.toggle("hidden");
                for(var i = 0 ; i < index ; i++)
                {
                    tbody.innerHTML += `<tr class=""><td><input  value="${arr[i].name}" name="name" disabled></td>
                    <td><input  value="${arr[i].price}" name="price" disabled>$</td>
                    <td><input  value="${arr[i].author.name}" name="["author"]["name"]" disabled></td>
                    <td><input  value="${arr[i].author.email}"  name='["author"]["email"]' disabled></td>
                    <td><button  onclick="editdata(this)">Edit</button></td>
                    <td><button  onclick="delete_(this)">Delete</button></td>
                    </tr>`

                    
                }

                

                
                
            }
})

function editdata(e)
{
    //ar newIdex = Math.abs(index+remover);
    var rowIndex = Array.from(e.closest("tr").parentNode.children).indexOf(e.closest("tr"));
    //make all tds input and thin get new value and then update table by for loop
    var inputsInRow= trs[rowIndex].getElementsByTagName("input");
    console.log(inputsInRow);
    trs[rowIndex].classList.toggle("swap")
    if(trs[rowIndex].classList.contains("swap")){
        for(var i = 0 ; i < inputsInRow.length ; i++)
        {
            inputsInRow[i].disabled = false;
        }
    }
    else
    {
        var i = 0;
        for (var key in arr[rowIndex] ) {
            debugger
            // console.log(x);
            // console.log(i);
            // switch (i) {
            //     case 2:
            //         arr[rowIndex][key]["name"] = inputsInRow[i].value;
            //         break;
            //     case 3:
            //         arr[rowIndex][key]["email"] = inputsInRow[i].value;
            //         break;  
            //     default:
            //         arr[rowIndex][key] = inputsInRow[i].value;
            //         break;
            if(typeof arr[rowIndex][key] !== 'object')
            {
                arr[rowIndex][key] = inputsInRow[i].value;
            }
            else
            {
                for (var keys in arr[rowIndex][key]) {
                    arr[rowIndex][key][keys] = inputsInRow[i].value;
                    i++;
                }
                i-=2;
            }
            
            inputsInRow[i].disabled = true;
            i++;
            }
            inputsInRow[i].disabled = true;
           
        }
        
        // for(var i = 0 ; i < inputsInRow.length ; i++)
        // {
            
        //     //arr[rowIndex][inputsInRow[i].name] = inputsInRow[i].value;
        //     // console.log(inputsInRow[i].name);
        //     // console.log(arr[rowIndex] + inputsInRow[i].name);
        //     // console.log(arr[0].name);
        //     // console.log(arr[0].author.name);
            
        //     //console.log(inputsInRow[i].name);
        // }
        // console.log(arr[rowIndex]["author"]["name"]);
        console.log(arr)
    }


   


function delete_(e)
{ 
   
    //arr[index] = "";
    var rowIndex = Array.from(e.closest("tr").parentNode.children).indexOf(e.closest("tr"));
    console.log(rowIndex);
    arr.splice(rowIndex,1);
    e.closest("tr").remove();
    console.log(arr);
    
}

