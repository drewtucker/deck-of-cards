$(document).ready(function(){
  // Suits [Clubs, Diamonds, Spades, Hearts]
  var suits = [" of &#9827;", " of &#9826;", " of &#9824;", " of &#9825;"];
  var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  suits.forEach(function(suit){
    numbers.forEach(function(number){
      if(number == "A" || number == "J" || number == "Q" || number == "K"){
        $("#deck").append("<li> <strong>" + number + "</strong>" + suit + " </li>");
      } else {
        $("#deck").append("<li>" + number + suit + "</li>");
      };
    });
  });

});
