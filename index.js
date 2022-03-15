var colors = ["green", "red", "yellow", "blue"];

var chosencolors = [];
var playercolors = [];
var started = false;
$(".btn").click(function() {

  var chose = $(this).attr("id");
  playercolors.push(chose);
  playsound(chose);
  animate(chose);
checkanswer(playercolors.length-1);


})
function checkanswer(currentlevel){
if(playercolors[currentlevel]==chosencolors[currentlevel]){


  if (playercolors.length==chosencolors.length){

    setTimeout(function(){

      nextsequence();
    },1000);
  }
}

  else{

    $("#level-title").text("Game Over, Press any key to Restart.");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100)
    started = false;
    chosencolors = [];
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

  }
}



function nextsequence() {

  playercolors = [];
  var ri = Math.floor(Math.random() * 4);
  var rc = colors[ri];
   chosencolors.push(rc);
   let level = chosencolors.length;
   $("#level-title").text("Level "+level);
  $("#" + rc).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(rc);




}

function playsound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animate(pressed) {

  $("#" + pressed).addClass("pressed");
  setTimeout(function() {
    $("#" + pressed).removeClass("pressed");
  }, 100);


}

$(document).keydown(function(){
if (!started){
nextsequence();
started = true;
}


})
