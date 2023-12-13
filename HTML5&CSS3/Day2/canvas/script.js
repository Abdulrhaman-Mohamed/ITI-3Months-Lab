var canvas = document.getElementById("can");
var btn = document.getElementById("change");
var color = document.getElementById("color");
var ctx = canvas.getContext("2d");

btn.addEventListener("click", function () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle=color.value;
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.stroke(); 
  }
});
