// ********* Global Variables *********
// -------------------------------------------------------------------------
// Used to store the random number
var gameNumber
// Stores the number of Wins
var winCount = 0;
// Stores the number of Losses
var lossCount = 0;
var totalScore = 0;

// ********* FUNCTIONS *********
// -------------------------------------------------------------------------
function startGame() {
	// Game Number is chosen at random. Range: 19 - 120
	gameNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
	console.log(gameNumber);
	// update the html with game info
  	document.getElementById("gameNumber").innerHTML = gameNumber;
  	document.getElementById("totalScore").innerHTML = totalScore;
}

function roundComplete(){
	//Win
	if (gameNumber.toString() == totalScore.toString()){
		winCount++;
		document.getElementById("winCounter").innerHTML = winCount;
		startGame()
	}
	//Loss
	else if (totalScore.toString() > gameNumber.toString()) {
		lossCount++
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame()
	}
}

// ********* PROCESS *********
// -------------------------------------------------------------------------
// Potential Background Music:
// https://www.youtube.com/watch?v=e4lY0P0bfOo 
// https://www.youtube.com/watch?v=tfjhJDttabw
startGame();
roundComplete()