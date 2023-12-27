// function submit_()
// {
//     //debugger
//    var arr = ["FullName" , "UserName" ,"email" , "Gender" ,"Gender"]
//    var inputs = document.getElementsByTagName("input");
//    for(var i = 0 ; i < inputs.length ; i++)
//    {
//     //debugger
//     if(!hasCookie(arr[i]) || getCookie(arr[i]) !== inputs[i].value )
//     {
//         if(i>2 && inputs[i].checked)
//         {
//             setCookie("Gender" , inputs[i].value , new Date());
//         }
    
//         if(inputs[i].value.length > 0 && i<= 2)
//         {
//             setCookie(arr[i] , inputs[i].value , new Date());
//         }
//        } 
//     }


//    location.href = "Welcome.html";
// }


function submit_()
{
    
        var FullName = document.getElementsByTagName("input")[0];
        var UserName = document.getElementsByTagName("input")[1];
        var Email = document.getElementsByTagName("input")[2];
        var Gender = document.querySelector('input[name="Gender"]:checked');

        let obj = {
            fullname:FullName.value,
            username:UserName.value,
            email:Email.value,
            gender:Gender.value
        }

        if(!hasCookie(UserName.value))
        {
            obj[`${UserName.value}_counter`] = 0;
            setCookie(UserName.value,JSON.stringify(obj),new Date());
        }
           

        location.assign(`Welcome.html?username=${UserName.value}`)
}
