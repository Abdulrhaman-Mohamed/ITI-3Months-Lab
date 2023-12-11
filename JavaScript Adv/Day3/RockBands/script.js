var xhr = new XMLHttpRequest();
var selection = document.body.getElementsByTagName("select");
var arr;

xhr.open("Get", "./rockbands.json");
xhr.send();

xhr.addEventListener("readystatechange", function () {
  if (xhr.status !== 400) {
    if (xhr.readyState === 4) {
      var json = JSON.parse(xhr.response);
      arr = json;
      // console.log(typeof json);
      // for (var key in json) {
      //     // console.log(key+" "+json[key]);
      //     arr
      // }
      // var json = JSON.parse(xhr.response);
      // json.forEach(function(element){
      //     body.innerHTML +=`<div class='post'>
      //      <h1>${element.title}</h1>
      //      <p>${element.body}</p>
      //     </div>`
      // });
      // console.log(arr);
      //console.log(JSON.parse(xhr.response))

      for (var key in json) {
        selection[0].innerHTML += `<option value='${key}'>${key}</option>`;
      }
    }
  }
});

function apperrock()
{
    selection[1].innerHTML ="";
    var value =selection[0].options[selection[0].selectedIndex].value;
    
    selection[1].classList.remove("hidden");
    arr[value].forEach(function(element){
        selection[1].innerHTML += `<option value='${element.value}'>${element.name}</option>`;
    });

    console.log(arr[value])
    
}


function goWebsite()
{
    var value = selection[1].options[selection[1].selectedIndex].value;
    location.href=`${value}`;
}
