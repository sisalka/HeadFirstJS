var loc1= math.floor(math.random()*5);
var loc2= loc1+1;
var loc3= loc1+2;

var guess;
var hits=0;
var guesses=0;

var isSunk=false;

while (isSunk==false){
  guess=prompt("have guess from 0 to 6");
  if ((guess < 0 || guess >6) || isNaN(guess)){
      guess=prompt("must be a number from 0 to 6");
  }else{
    guesses +=1;
  }
    if (guess == loc1 || guess==loc3 || guess == loc2){
      hits +=1;
      alert("HIT");
    }else{
      alert("MISS");
      } 
    if (hits ==3){
      isSunk=true;
      alert("you won");
    }
    
    
}

alert("It took u "+guesses+" guesses to win" );
