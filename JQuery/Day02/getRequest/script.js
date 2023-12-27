$(document).ready(function () {
    $.get(" https://jsonplaceholder.typicode.com/users",
        function (data) {
            console.log(data);
            data.forEach(element => {
                console.log(element.name);
                $(".btns").append(`<button value='${element.id}'>${element.name}</button>`);
            });
            //console.log(data.name);

        }
    );

    $.get(`https://jsonplaceholder.typicode.com/posts?userId=1`, 
    function(data){    
        data.forEach((el)=>{
            
            $(".posts ul").append(`<li>${el.title}</li>`);

        })
    }
    );
});

$(".btns").on("click","button", function () {
    //debugger
    
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.value}`, 
    function(data){
        $(".posts ul").html("");    
        data.forEach((el)=>{
            
            $(".posts ul").append(`<li>${el.title}</li>`);

        })
    }
    );
});

// $("button").click(function () { 
//     console.log("HGG");
    
// });