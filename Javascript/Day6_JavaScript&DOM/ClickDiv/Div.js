 var mainDiv = document.getElementsByTagName("div")[0];
// //mainDiv.addEventListener


// // function changeColor(e)
// // {
    
// //     var clone = mainDiv.cloneNode(true);
// //     console.log(mainDiv.addEventListener("click",e));
// //     console.log(clone.target.preventDefault())
// //     clone.addEventListener("click", function(e) {
// //         e.stopPropagation(); // Prevent click event from reaching ancestors
// //     });
// //    console.log(clone.style.backgroundColor = "rgb(" +Math.round((Math.random() *10)) * 25 +","+Math.round((Math.random()*10)) * 25+" ,"+ Math.round((Math.random()*10)) * 25 +" )"); 
// //     document.body.appendChild(clone);
// // }

// // mainDiv.addEventListener("click" ,changeColor);


mainDiv.addEventListener("click" , function(e){
    var clone = mainDiv.cloneNode(true);
    clone.style.backgroundColor = "rgb(" +Math.round((Math.random() *10)) * 25 +","+Math.round((Math.random()*10)) * 25+" ,"+ Math.round((Math.random()*10)) * 25 +" )";
    document.body.appendChild(clone);

    console.log(e.target);
})

// function change(e)
// {
//     console.log(mainDiv.ta);
//         var clone = mainDiv.cloneNode(true);
//     clone.style.backgroundColor = "rgb(" +Math.round((Math.random() *10)) * 25 +","+Math.round((Math.random()*10)) * 25+" ,"+ Math.round((Math.random()*10)) * 25 +" )";
//     document.body.appendChild(clone);
// }


