function getCookie(cookieName)
{
    //debugger
    //console.log(document.cookie);
    // var value = cookies.find((el)=>
    // {
        //     let get_split = el.split("=");
        //     if(get_split[0] ===cookieName )
        //     return get_split[1];
        // })
        // return value == undefined ? alert("No" + cookieName +"Like it") : value ;
        

    var cookies = document.cookie.split("; ");
    for(var i = 0 ; i < cookies.length ; i++)
    {
        //debugger
        let get_split = cookies[i].split("=");

        // if(get_split[0] === "counter" )
        // {
        //     //document.cookie = `counter = ${(+get_split[1]++).toString()};`;
        //     let value = +get_split[1] + 1 ;
        //     document.cookie = `counter = ${value};`;
        //     return value;
        // }
        
            if(get_split[0] ===cookieName )
                return get_split[1];

    }
    return false;

}


function setCookie(cookieName,cookieValue,expiryDate)
{
    //let date = new Date(expiryDate);
    document.cookie = `${cookieName} = ${cookieValue}; expires=${expiryDate}`;

    
}


function deleteCookie(cookieName)
{
    //debugger
    let date = new Date("1999-11-25");

    if(document.cookie.includes(cookieName))
    {
        document.cookie = `${cookieName}=; expires=${date}`;
    }
        
    else
        alert("it's Not Found");

}

function  allCookieList()
{
    var cookies = document.cookie.split("; ");
    for(var i = 0 ; i < cookies.length ; i++)
    {
        console.log(cookies[i]);
    }
}


function hasCookie(cookieName)
{
    return document.cookie.includes(cookieName);
}




