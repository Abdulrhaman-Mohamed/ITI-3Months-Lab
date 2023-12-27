var arr =["./images/1.jpg" ,"./images/2.jpg" , "./images/3.jpg" , "./images/1.jpg","./images/4.jpg"]
let counter = 0;
$(".container img").on("click", function () {
    $("div.active-slider").removeClass("active");
    $(".active-slider img" ).attr("src", this.src);
    // console.log($(this).index()) 
    counter = $(this).index();
});

$("div.active-slider").on("click", function (e) {
    // console.log(this);
    // console.log(e.target);
    if(this === e.target)
    $("div.active-slider").addClass("active");
});

//Prev Arrow
$("div .prev").on("click", function () {
    //console.log(counter);
    if(counter < 1)
        counter=4;
    $(".active-slider img" ).attr("src", arr[--counter]);
});

//Next arrow
$("div .next").on("click", function () {
    console.log(counter , "next");
    if(counter > 3)
        counter=-1;
    $(".active-slider img" ).attr("src", arr[++counter]);
});



