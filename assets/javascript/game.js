// Javascript function to wrap everything
$(document).ready(function() {

	// ********* Variables *********
	// -------------------------------------------------------------------------
	// Used to store the random number
	var gameNumber;
	// Stores the number of Wins
	var winCount = 0;
	$("#winCounter").text(winCount);
	// Stores the number of Losses
	var lossCount = 0;
	$("#lossCounter").text(lossCount);
	// Tally of user's total score.
	var totalScore = 0;
	// Initialize Value of each crystal
	var crystal1Num = 0;
	var crystal2Num = 0;
	var crystal3Num = 0;
	var crystal4Num = 0;

	// ********* FUNCTIONS *********
	// -------------------------------------------------------------------------
	function startGame() {
		// Game Number is chosen at random. Range: 19 - 120
		gameNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
		console.log(gameNumber);

		// Initiate Total Score at each new round
		totalScore = 0;

		// assign random numbers between 1 and 12 to the 4 crystals each round
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
		$("#gameNumber").text(gameNumber);
		$("#totalScore").text(totalScore);
	}

	// function to calculate a win or loss. updates win/loss counter
	function roundComplete(){
		//Win
		if (gameNumber === totalScore){
			winCount++;
	  		$("#winCounter").text(winCount);
	  		console.log(winCount)
			startGame()	
		}
		//Loss
		else if (totalScore > gameNumber) {
			lossCount++
			$("#lossCounter").text(lossCount);
			console.log(lossCount)
			startGame()
		}
	}


	// update the value of the total score each time a crystal is clicked    	
	    $("#crystal1").on("click", function() {
	        totalScore = ((totalScore)+(crystal1Num))
	        $("#totalScore").text(totalScore);
	        console.log(totalScore);
	        roundComplete()
	    });
	    $("#crystal2").on("click", function() {
			totalScore = ((totalScore)+(crystal2Num))
			$("#totalScore").text(totalScore);
	        console.log(totalScore);
	        roundComplete()
		});
	    $("#crystal3").on("click", function() {
			totalScore = ((totalScore)+(crystal3Num))
			$("#totalScore").text(totalScore);
	        console.log(totalScore);
	        roundComplete()
		});
	    $("#crystal4").on("click", function() {
			totalScore = ((totalScore)+(crystal4Num))
			$("#totalScore").text(totalScore);
	        console.log(totalScore);
	        roundComplete()
		});


// ********* PROCESS *********
// -------------------------------------------------------------------------
		// Background Music Intiate
		var audio = new Audio('assets/music/br.mp3');
		audio.play();
		audio.loop = true;
		audio.volume = 0.2;

		// Start a round
		startGame();
});