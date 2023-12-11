/*var birth_User=prompt("Please enter Your Birth Date in this format (DD-MM-YYYY)")

function MakeSureDate(birth)
{
    if(birth.length !== 10)
    alert("Please Enter at laset 10 characters");

    else
    {
        if(birth[2] !== '-' || birth[5] !== '-')
        alert("it is in wrong Format");

        else{

            var split = birth.split("-");
            console.log(split);
            var date = new Date(Number(split[2]) , Number(split[1])-1 , Number(split[0]));
            alert(date);

        }
    }





}
MakeSureDate(birth_User)*/

var Dateparamter= prompt("Please enter Date (DD-MM-YYYY)");
let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function returnDate(birth)
{
    if(birth.length !== 10)
    alert("Please Enter at laset 10 characters");

    else
    {
        if(birth[2] !== '-' || birth[5] !== '-')
        alert("it is in wrong Format");

        else{

            var split = birth.split("-");
            console.log(split);
            var date = new Date(Number(split[2]) , Number(split[1])-1 , Number(split[0]));
            console.log(daysArray[date.getDay()]);
        }
    }
}

returnDate(Dateparamter);
