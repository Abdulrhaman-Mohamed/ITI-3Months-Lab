var sum = 0;
do
{
    var num = prompt("Enter a number: ");
    sum += isNaN(num) ? 0 : Number(num) ;

}while(sum != 0 && sum < 100);

document.write(sum);