var win = 0;
var loss = 0;
var counter = 0;

var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

$("#number-to-guess").text(targetNumber);
  
  var iconOne = Math.floor(Math.random() * 12 + 1);
  var iconTwo = Math.floor(Math.random() * 12 + 1);
  var iconThree = Math.floor(Math.random() * 12 + 1);
  var iconFour = Math.floor(Math.random() * 12 + 1);

  var imageOne = $("<img>");
  var imageTwo = $("<img>")
  var imageThree = $("<img>")
  var imageFour = $("<img>")

  imageOne.addClass("redOne");
  imageTwo.addClass("yellowOne");
  imageThree.addClass("greenOne");
  imageFour.addClass("blueOne");

  imageOne.attr("src", "assets/images/red.png");
  imageTwo.attr("src", "assets/images/yellow.png")
  imageThree.attr("src", "assets/images/green.png");
  imageFour.attr("src", "assets/images/blue.png")

  imageOne.attr("data-crystalvalue", iconOne);
  imageTwo.attr("data-crystalvalue", iconTwo);
  imageThree.attr("data-crystalvalue", iconThree);
  imageFour.attr("data-crystalvalue", iconFour);
  
  $("#red").append(imageOne);
  $("#yellow").append(imageTwo);
  $("#green").append(imageThree);
  $("#blue").append(imageFour);

var newgame = function(){
    counter = 0;
    targetNumber = Math.floor( Math.random() * (120 - 19 + 1) + 19);
    iconOne = Math.floor(Math.random() * 12 + 1);
    iconTwo = Math.floor(Math.random() * 12 + 1);
    iconThree = Math.floor(Math.random() * 12 + 1);
    iconFour = Math.floor(Math.random() * 12 + 1);
    imageOne.attr("data-crystalvalue", iconOne);
    imageTwo.attr("data-crystalvalue", iconTwo);
    imageThree.attr("data-crystalvalue", iconThree);
    imageFour.attr("data-crystalvalue", iconFour);
    console.log("Red: " + iconOne + " Yellow " + iconTwo + " Blue: " + iconThree +  " Green: " + iconFour)
}

var winlose = function() {

if (counter === targetNumber) {
      alert("You win!");
      newgame();
      win++;
      }

else if (counter >= targetNumber) {
      alert("You lose!!");
      newgame();
      loss++;
      }
}  

var update = function() {

    $("#wins").text(win);
    $("#lost").text(loss);
    $("#your-total").text(counter);
    $("#number-to-guess").text(targetNumber);

}

$(document).ready(function() {

  $(".redOne",).on("click", function() {

     $(".redOne").rotate({angle: 0, animateTo: 180});

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    winlose();
    update();

  });

  $(".yellowOne").on("click", function() {

     $(".yellowOne").rotate({angle: 0, animateTo: 180});

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    winlose();
    update();

  });

    $(".greenOne",).on("click", function() {

     $(".greenOne").rotate({angle: 0, animateTo: 180});

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    winlose();
    update();

  });

    $(".blueOne",).on("click", function() {

     $(".blueOne").rotate({angle: 0, animateTo: 180});

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    winlose();
    update();

  });  

});