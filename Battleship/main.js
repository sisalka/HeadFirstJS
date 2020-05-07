var loc1= 3;
var loc2= 4;
var loc3= 5;

var guess;
var hits=0;
var guesses=0;

var isSunk=false;

while (isSunk==false){
  guess=prompt("have guess from 0 to 6");
  if ((guess < 0 or guess >6) or isNaN(guess)){
      guess=prompt("must be a number from 0 to 6");
  }else{
    guesses +=1;
  }
    if (guess == loc1 or guess==loc3 or guess == loc2){
      hits +=1;
    }
    if (hits ==3){
      isSunk==true;
      alert("you won");
    }
}

  
