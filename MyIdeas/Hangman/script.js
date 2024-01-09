var canvas = document.getElementById("hangman-draw");
var context = canvas.getContext("2d");
let secore = 0 , correct_click =0;

let words = [
  "COMPUTER",
  "COLOR",
  "HUMAN",
  "WORLD",
  "JAVASCRIPT",
  "MOUSE",
  "MAN",
  "WOMAN",
  "SUN",
  "MOON",
  "OCEAN",
  "MOUNTAIN",
  "FOREST",
  "ELEPHANT",
  "GUITAR",
  "PIANO",
  "UNIVERSE",
  "BICYCLE",
  "TELEVISION",
  "BOOK",
  "COFFEE",
  "GARDEN",
  "RIVER",
  "FIRE",
  "WATERFALL",
];

let hints = [
  "Electronic device with various functions",
  "Visual perception of different wavelengths of light",
  "Homo sapiens",
  "Planet Earth and all life upon it",
  "Programming language used for web development",
  "Small rodent often kept as a pet",
  "Adult human male",
  "Adult human female",
  "Star at the center of the solar system",
  "Natural satellite of Earth",
  "Vast body of saltwater",
  "Elevated land mass",
  "Large area covered chiefly with trees and undergrowth",
  "Gentle giant with a trunk and tusks",
  "Stringed musical instrument",
  "Musical instrument with keys",
  "All of space, time, matter, and energy",
  "Human-powered vehicle with two wheels",
  "Electronic device for watching broadcasts",
  "Written or printed work consisting of pages",
  "Beverage made from roasted coffee beans",
  "Cultivated area of flowers, plants, or vegetables",
  "Natural flowing watercourse",
  "Combustion process producing heat and light",
  "Cascade of water falling from a height",
];



//Start-Game
$("#get-start").click(function () {
  // Make it zero
  $(".letters").html("");
  $(".word").html("");
  context.clearRect(0, 0, canvas.width, canvas.height);
  correct_click = 0;
  secore=0;
  //Print all letters in section letters
  for (let i = 65; i <= 90; i++) {
    $(".letters").append(`<button>${String.fromCharCode(i)}</button>`);
  }
  //debugger
  wrongAnwser = 0;

  word = words[Math.floor(Math.random() * 25)];
  $(".word").append(`<p class=" d-flex justify-content-center align-items-center gap-2"></p>`);
  word.split("").forEach((element) => {
    //debugger
    $(".word p").append(`<span>_</span>`);
  });


  $(".word").append(`<p id="hint">${hints[words.indexOf(word)]}</p>`);
  

  $(".word").removeClass("d-none");
  $("#canvas-letters").removeClass("d-none");
  $(".start-game").addClass("d-none");
  $("#back-Home").removeClass("d-none");
  $("#back-Home p").html(`Your Secore : ${secore}`);
  
});

$(".letters").on("click", "button", function () {
  let char = $(this).text();
  let indexesOfCharaters = findindexes(word, char);
  if (indexesOfCharaters.length > 0) {
    indexesOfCharaters.forEach(function (el) {
      $(`.word span:eq(${el})`).text(char);
      correct_click++;
    });
    secore += 20;
    $("#back-Home p").html(`Your Points : ${secore}`);

    
    //Remove Button after chose correctly
    $(this).attr("disabled",true);


    // if number of click == length of word then he get the correct word
    if(correct_click == word.length)
    {
      swtichAlert(word , "S");
    }



  } else {
    //debugger
    wrongAnwser++;
    secore -= 10;
    $("#back-Home p").html(`Your Secore : ${secore}`);
    drawHangman(wrongAnwser);
    if (wrongAnwser > 9) {
      swtichAlert(word , "W");
    }


  }

  
});

// List Button
$("#list-button").click(function () { 
  $(".start-game").addClass("d-none");
  
  showList();
  
});

// Back To home on click
$("#back-Home button").click(function () { 
  BackHome();
});


// Show List
function showList() {
  //debugger
  $(".word").addClass("d-none");
  $("#canvas-letters").addClass("d-none");
  $("#list").removeClass("d-none");
  $("#back-Home").removeClass("d-none");

  //Make Table with null
  $("#list table tbody").html("");
  $("#back-Home p").html(``);

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

//set Secore in localStorage
function setsecore()
{
  // var getName = prompt("Please Enter Your Name..");
  // if(getName && !isFinite(getName))
  // {
  //         // store secore in localStorage
  //         localStorage.setItem(getName, secore);
  // }
  //     // make secore = 0 return in null secore
  //     secore = 0;



  swal({
    text: "Please Enter Your Name....?",
    content: "input",
  })
  .then((value) => {
    // Check if the user clicked "Enter" and entered a name
    if (value !== null && value !== "") {
      // Save the name in local storage with the entered name as the key
      localStorage.setItem(value, secore);
      swal("Name saved successfully!", { icon: "success" });
    } else {
      swal("Name not entered or canceled.", { icon: "info" });
    }
  })
  .then(()=>{
    showList();
    // make secore = 0 return in null secore
    secore = 0;
  })
  .catch((error) => {
    // Handle errors or if the user closes the prompt
    console.error("Error:", error);
  });


}

// Back-To Home to start 
function BackHome()
{
  $(".word").addClass("d-none");
  $("#canvas-letters").addClass("d-none");
  $("#list").addClass("d-none");
  $(".start-game").removeClass("d-none");
  $("#back-Home").addClass("d-none");
}


// Get wrong and success alert 
function swtichAlert(word , type)
{
  var title_ 
  , text_ 
  , icon_ ;
  if(type === "W")
  {
     title_ = "hard Luck!"
    , text_ = `You answered wrong and the word was ${word} `
    , icon_ = "error";

  }
  if(type === "S")
  {
    title_ = "Good Job!"
    , text_ = `You answered Success and the word was ${word} `
    , icon_ = "success";
  }
  swal({

    title: title_,
    text: text_,
    icon: icon_,
  }).then(()=>{
    setsecore();
  }).catch((error) => {
    // Handle errors or if the user closes the prompt
    console.error("Error:", error);
  });
}