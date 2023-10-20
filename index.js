var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var userGuess = prompt("Enter r p or s");
userGuess = userGuess.toLowerCase();

if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

    alert("the computer chose " + computerGuess);

    if((userGuess === "r" && computerGuess === "s") || 
    (userGuess === "p" && computerGuess === "r") ||
    (userGuess === "s" && computerGuess === "p")) {

    alert("Player wins!");
}

    else if ((userGuess === "r" && computerGuess === "p") || 
    (userGuess === "p" && computerGuess === "s") ||
    (userGuess === "s" && computerGuess === "r"))
    {alert("Computer wins");}

    else alert("Draw");
}

