

var getUserNames = fetch(" https://jsonplaceholder.typicode.com/users");

//console.log(getUserNames)

getUserNames.then((data)=>
{
    //console.log(data.json())
    return data.json();
}).then((data)=>{
    //console.log(data);
    data.forEach(element => {
        //console.log(element.name);
        $(".btns").append(`<button value='${element.id}'>${element.name}</button>`);
    });

    // return getPosts(1);

})
// .then((posts)=>{
//     posts.forEach((el)=>{
//         $(".posts ul").append(`<li>${el.title}</li>`);
//     })
// })
.catch((MesError)=>{
    console.log(MesError);
})



async function getPosts(id)
{
    //debugger
    try
    {
        var getPostsUsers = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        //console.log(getPostsUsers.json())
        return await getPostsUsers.json();
    }
    catch(MesError){
        console.log(MesError)
    }

}
//getPosts(150);


$(".btns").on("click", "button",async function () {
    try
    {
            //debugger
    $(".posts ul").empty();
    let posts = await getPosts(this.value);
    //console.log(posts)
    posts.forEach((el)=>{
        $(".posts ul").append(`<li>${el.title}</li>`);
    })
    }
    catch(Meserror)
    {
        console.log(Meserror);
    }


    
});


