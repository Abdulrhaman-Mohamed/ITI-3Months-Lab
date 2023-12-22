var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var undo = document.getElementById("undo"),
    redo = document.getElementById("redo");
var tools_draw = document.querySelectorAll(".draw-option")
let prevPostionX, prevPostionY ,
 checkedfill = document.getElementById("Fill"),
 colorCheckd = document.getElementsByTagName("input")[1];

let undoStack = [];
let redoStack = [];

var mouseClick = false;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

tools_draw.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelector(".draw-option.active-tool").classList.remove("active-tool");
        el.classList.add("active-tool");
    })
});

function draw(e) {


    var draw_option = document.querySelector(".active-tool");
    if (mouseClick) {

    ctx.strokeStyle = colorCheckd.value;
    ctx.fillStyle = colorCheckd.value;

        if (draw_option.id == "line") {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
         } else
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if(undoStack.length > 1)
                {
                    ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
                }
                if (draw_option.id == "Rectangle") {
                    //debugger
                    if(checkedfill.checked)
                        ctx.fillRect(prevPostionX, prevPostionY, e.offsetX - prevPostionX, e.offsetY - prevPostionY);
                    else
                        ctx.strokeRect(prevPostionX, prevPostionY, e.offsetX - prevPostionX, e.offsetY - prevPostionY);
                }
                 if (draw_option.id == "Circle")
                {
                    //debugger
                    ctx.beginPath();
                    let radius = Math.sqrt(Math.pow((prevPostionX-e.offsetX),2) + Math.pow((prevPostionY-e.offsetY),2))  ;
                    ctx.arc(prevPostionX , prevPostionY ,radius , 0, 2* Math.PI);
                    if(checkedfill.checked)
                       ctx.fill();  
                    else
                       ctx.stroke();
                }
            }
        } 
    }


canvas.addEventListener("mousedown", (e) => {
    prevPostionX = e.offsetX;
    prevPostionY = e.offsetY;
    mouseClick = true;
    ctx.beginPath();
    ctx.lineWidth = 2;
});

canvas.addEventListener("mouseup", () => {
    mouseClick = false;
    let lineImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStack.push(lineImage);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
});

canvas.addEventListener("mousemove", draw);

undo.addEventListener("click", function () {
    if (undoStack.length > 0) {
        let state = undoStack.pop();
        redoStack.push(state);
        if (undoStack.length === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
        }
    }
});

redo.addEventListener("click", function () {
    if (redoStack.length > 0) {
        let state = redoStack.pop();
        undoStack.push(state);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
    }
});
