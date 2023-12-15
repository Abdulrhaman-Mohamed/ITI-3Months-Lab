var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var sess = document.getElementById("sess");
var imgs=document.getElementsByTagName("img");

let item ;
document.body.addEventListener("dragstart",function(e){
    item = e.target.id;
    console.log(item);
})

for(let i = 0 ; i < 3 ; i++)
{
    imgs[i].addEventListener("dragover",function(e)
{
    e.preventDefault();
    
})
imgs[i].addEventListener("drop",checker)
}


function checker(e)
{
    if(e.target.id =="sess")
    {
        if(item == "rock")
        {
            sess.remove();
        }

        if(item == "paper")
        {
            paper.remove();
        }
    }

    if( e.target.id == "paper" )
    {
        if(item == "rock")
        {
            rock.remove();
        }
        if(item == "sess")
        {
            paper.remove();
        }
    }

    if(e.target.id == "rock")
    {
        if(item == "paper")
        {
            rock.remove();
        }

        if(item == "sess")
        {
            sess.remove();
        }
    }
}