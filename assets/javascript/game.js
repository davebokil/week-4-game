// ********* Global Variables *********
// -------------------------------------------------------------------------
// Used to store the random number
var gameNumber
// Stores the number of Wins
var winCount = 0;
// Stores the number of Losses
var lossCount = 0;
// Tally of user's total score.
var totalScore = 0;
// Initialize Value of each crystal
var crystal1Num = 0
var crystal2Num = 0
var crystal3Num = 0
var crystal4Num = 0

// ********* FUNCTIONS *********
// -------------------------------------------------------------------------
function startGame() {
	// Game Number is chosen at random. Range: 19 - 120
	gameNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
	console.log(gameNumber);

	// assign random numbers between 1 and 12 to the 4 crystals
	var arr = [];
	for (var i = 0, l = 4; i < l; i++) {
    arr.push(Math.floor(Math.random() * (12 - 1 + 1) ) + 1)
    crystal1Num = arr[0]
    crystal2Num = arr[1]
    crystal3Num = arr[2]
    crystal4Num = arr[3]
	}
	console.log(arr)
	console.log(crystal1Num)
	console.log(crystal2Num)
	console.log(crystal3Num)
	console.log(crystal4Num)

	// update the html with game info
  	document.getElementById("gameNumber").innerHTML = gameNumber;
  	document.getElementById("totalScore").innerHTML = totalScore;

  	// jquery updates the value of the total score each time a crystal is clicked
    $(document).ready(function() {    	
        $("#crystal1").on("click", function() {
            totalScore = ((totalScore)+(crystal1Num))
            document.getElementById("totalScore").innerHTML = totalScore;
            console.log(totalScore);
        });
        $("#crystal2").on("click", function() {
    		totalScore = ((totalScore)+(crystal2Num))
            document.getElementById("totalScore").innerHTML = totalScore;
            console.log(totalScore);
		});
        $("#crystal3").on("click", function() {
    		totalScore = ((totalScore)+(crystal3Num))
            document.getElementById("totalScore").innerHTML = totalScore;
            console.log(totalScore);
		});
        $("#crystal4").on("click", function() {
    		totalScore = ((totalScore)+(crystal4Num))
            document.getElementById("totalScore").innerHTML = totalScore;
            console.log(totalScore);	
		});
    });
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
		console.log(lossCount)
		startGame()
	}
}

// ********* PROCESS *********
// -------------------------------------------------------------------------
// Potential Background Music:
// https://www.youtube.com/watch?v=e4lY0P0bfOo 
// https://www.youtube.com/watch?v=tfjhJDttabw
// https://www.youtube.com/watch?v=l3zS35MAe0E
startGame();
roundComplete()