var weaponList = ["rock", "paper", "scissors"];

function randomWeaponGenerator() {
  var randomNumber = Math.floor(Math.random() * 3);
  var weapon = weaponList[randomNumber];
  return weapon;
}

var audio = new Audio("sounds/button.mp3");

var p1 = "Player 1";
var p2 = "Player 2";

$("#btn").click(function(){
  audio.play();
  somefunction(p1,p2);
});

$("#player1").click(function (){
  p1 = prompt("Enter your name:");
  $("#player1").text(p1);
});

$("#player2").click(function (){
  p2 = prompt("Enter your name:");
  $("#player2").text(p2);
});


function somefunction(p1,p2) {
$(".sub-text").css("display","none");

  if (p1 === null) {
    p1 = "Player 1";
    $("#player1").text(p1);
  }
  if (p2 === null) {
    p2 = "Player 2";
    $("#player2").text(p2);
  }

  var a = randomWeaponGenerator();
  $("#weapon1").attr("src", "images/" + a + ".png");
  console.log(a);
  var b = randomWeaponGenerator();
  $("#weapon2").attr("src", "images/" + b + ".png");
  console.log(b);

  if (a === b) {
    $("#main-title").text("Draw!");
  } else {

    if (a === "paper" && b === "rock") {
      $("#main-title").text(p1+" wins!");
    } else if (a === "rock" && b === "paper") {
      $("#main-title").text(p2+" wins!");
    }

    if (a === "rock" && b === "scissors") {
      $("#main-title").text(p1+" wins!");
    } else if (a === "scissors" && b === "rock") {
      $("#main-title").text(p2+" wins!");
    }

    if (a === "scissors" && b === "paper") {
      $("#main-title").text(p1+" wins!");
    } else if (a === "paper" && b === "scissors") {
      $("#main-title").text(p2+" wins!");
    }

  }

}
