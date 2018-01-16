$(document).ready(function(){
  var suits = [" of Clubs", " of Diamonds", " of Spades", " of Hearts"];
  var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  suits.forEach(function(suit){
  numbers.forEach(function(number){
      $("#deck").append("<li>" + number + suit + "</li>");
    });
  });

});
