var canvas = document.getElementById("hangman-draw");
var context = canvas.getContext("2d");
let secore = 0;

//Start-Game
$("#get-start").click(function () {
  $(".letters").html("");
  //Print all letters in section letters
  for (let i = 65; i <= 90; i++) {
    $(".letters").append(`<button>${String.fromCharCode(i)}</button>`);
  }
  wrongAnwser = 0;
  words = [
    "COMPUTER",
    "CAT",
    "DOG",
    "COLOR",
    "HORES",
    "HUMAN",
    "WORLD",
    "JAVASCRIPT",
    "MOUSE",
    "MAN",
    "WOMAN",
  ];
  word = words[Math.floor(Math.random() * 11)];
  word.split("").forEach((element) => {
    $(".word").append(`<span>_</span>`);
  });

  $(".word").removeClass("d-none");
  $("#canvas-letters").removeClass("d-none");
  $(".start-game").addClass("d-none");
});

$(".letters").on("click", "button", function () {
  let char = $(this).text();
  let indexesOfCharaters = findindexes(word, char);
  if (indexesOfCharaters.length > 0) {
    indexesOfCharaters.forEach(function (el) {
      $(`.word span:eq(${el})`).text(char);
    });
    secore += 20;
    $(this).remove();
  } else {
    //debugger
    wrongAnwser++;
    secore -= 10;
    drawHangman(wrongAnwser);
    if (wrongAnwser > 9) {
      var getName = prompt("Please Enter Your Name..");
      while (!getName || isFinite(getName)) {
        alert("Please Enter Your name!!!");
        getName = prompt("Please Enter Your Name..");
      }
      // store secore in localStorage
      localStorage.setItem(getName, secore);

      // make secore = 0 return in null secore
      secore = 0;
      showList();
    }
  }
});

// List Button
$("#list-button").click(function () { 
  $(".start-game").addClass("d-none");
  showList();
  
});


// Show List
function showList() {
  $(".word").addClass("d-none");
  $("#canvas-letters").addClass("d-none");
  $("#list").removeClass("d-none");

  //Make Table with null
  $("#list table tbody").html("");

  //console.log(localStorage);
  for (var i = 0; i < localStorage.length; i++) {
    $("#list table tbody").append(`<tr><th>${i + 1}</th>
    <td>
    ${localStorage.key(i)}
    </td>
    <td>
    ${localStorage.getItem(localStorage.key(i))}
    </td>
    </tr>`);
  }
}

// Return indexes of characters
function findindexes(word, char) {
  return word
    .split("")
    .map(function (c, index) {
      return c === char ? index : null;
    })
    .filter(function (index) {
      return index !== null;
    });
}

// Draw HangmanS
function drawHangman(step) {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "white";
  context.fillStyle = "white";

  // Draw the scaffold
  context.beginPath();
  context.moveTo(20, 380);
  context.lineTo(180, 380);
  context.stroke();

  // Draw the vertical pole
  if (step > 0) {
    context.beginPath();
    context.moveTo(50, 380);
    context.lineTo(50, 50);
    context.stroke();
  }

  // Draw the horizontal pole
  if (step > 1) {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(250, 50);
    context.stroke();
  }

  // Draw the rope
  if (step > 2) {
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(250, 100);
    context.stroke();
  }

  // Draw the head
  if (step > 3) {
    context.beginPath();
    context.arc(250, 130, 30, 0, Math.PI * 2);
    context.stroke();
  }

  // Draw the body
  if (step > 4) {
    context.beginPath();
    context.moveTo(250, 160);
    context.lineTo(250, 250);
    context.stroke();
  }

  // Draw the left arm
  if (step > 5) {
    context.beginPath();
    context.moveTo(250, 180);
    context.lineTo(180, 200);
    context.stroke();
  }

  // Draw the right arm
  if (step > 6) {
    context.beginPath();
    context.moveTo(250, 180);
    context.lineTo(320, 200);
    context.stroke();
  }

  // Draw the left leg
  if (step > 7) {
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(200, 300);
    context.stroke();
  }

  // Draw the right leg
  if (step > 8) {
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(300, 300);
    context.stroke();
  }

  // Draw the sad face
  if (step > 9) {
    context.beginPath();
    context.arc(250, 130, 15, Math.PI / 7, (6 * Math.PI) / 7, false);
    context.stroke();
    context.beginPath();
    context.arc(240, 130, 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(260, 130, 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(250, 145, 5, 0, Math.PI);
    context.stroke();
  }
}