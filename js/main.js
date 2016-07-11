var snd;
var aiLoop;
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var player1Human=true;
var player2Output;
var player1Output; 

var currentController = new Controller();
this.currentview = new View(currentController); 

currentController.addActionLinks();
currentController.addLinks();
currentController.addHandlers();

function changeMode(){
		player1Human=!player1Human;

		if(!player1Human){ //IF Player 1 is not human, Start AI for player 1
			aiLoop = setInterval(function(){ 
				currentController.updateScore(currentController.getAIChoice().action.toString());
				currentController.updateView();
			},50);
		}else{
			clearInterval(aiLoop);
		}
}
 
function process(choice){ 
	currentController.updateScore(choice);
	currentController.updateView();
}
 
 
