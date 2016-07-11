
class View{

	constructor(controller){
	this.outcome = document.getElementById("outcome");
	this.player1Output = document.getElementById("player1Output");
	this.player2Output = document.getElementById("player2Output");
	this.player1score = document.getElementById("player1score");
	this.player2score = document.getElementById("player2score");
	this.playerType = document.getElementById("playerType");
	this.gameTitle = document.getElementById("gameTitle");
	this.controller = controller;
	}

	updateTitle(){
 
			if(this.controller.evolve==1){ 
				this.gameTitle.textContent = "Rock Paper Scissors Spock Lizard"; 
			}
		}

	createMove(obj){
		var a = document.createElement('a');
		var linkText = document.createTextNode( obj.action);
		a.appendChild(linkText);
		a.title = obj.action;
		a.href = "#";
		a.id = obj.elementId;
		var p = document.createElement('p');
		p.appendChild(a);
		document.getElementById('moves').appendChild(p);
	}
		
	refresh(){


		if(player1Human){ 
			this.playerType.textContent = "Human" ; 
		}else{ 
			this.playerType.textContent = "AI" ;
		}

		this.outcome.textContent = "Player 1 " +  currentController.player1Outcome;
		this.player1Output.innerHTML =  "<img  title='" + currentController.player1Output + "'src='images/" +  currentController.player1Output +  ".png'/> "   ;// console.log(currentController.player1Output);
		this.player2Output.innerHTML =  "<img title='" + currentController.player2Output + "' src='images/" +  currentController.player2Output +  ".png'/> "   ; //currentController.player2Output ; // console.log(currentController.player2Output);
		this.player1score.textContent = "Score " + scorePlayer1;
		this.player2score.textContent = "Score " + scorePlayer2;
		}

}
 class gameEntity{

	constructor(action,elementId,image, beats){
		this.action = action;
		this.elementId = elementId;
		this.image = image;
		this.beats = beats; 
	}

}

class Controller{
	 
   
	constructor(){
		this.moveList = [];
		this.outcomeMatrix = [];  
		this.ai = new AI();
		this.player1Output = 0;
		this.player2Output = 0;
		this.evolve = 0;
	}

		addActionLinks(){
 
 		var rockMove = new gameEntity("rock","rockAction","", ['scissors']);
		var paperMove = new gameEntity("paper","paperAction","", ['rock']);
		var scissorMove = new gameEntity("scissors","scissorsAction","", ['paper']);
		
 		this.moveList.push(rockMove);
		this.moveList.push(paperMove);
		this.moveList.push(scissorMove);

		// Add rock-paper-scissors-Spock-lizard variation
		var myParam = location.search.split('evolve=')[1]; 

		if(myParam=="1")
			this.evolve=1;

		if( this.evolve==1){

			this.evolve = 1; 
			var spockMove = new gameEntity("spock","spockAction","", ['rock','scissors']);
			var lizardMove = new gameEntity("lizard","lizardAction","", ['paper','spock']);

			// Add new moves
			this.moveList.push(spockMove);
			this.moveList.push(lizardMove);
		
			// Update old moves with new strengths
			rockMove.beats.push('lizard'); 
			paperMove.beats.push('spock'); 
			scissorMove.beats.push('lizard'); 
		
		}
	

 	};


  addLinks(){
 	currentview.updateTitle();
		this.moveList.forEach(function(obj){

			currentview.createMove(obj);
 
		});

	}


	addHandlers(){
 
		this.moveList.forEach(function(obj){ 
			document.getElementById(obj.elementId).addEventListener("click", function(){ 
			currentController.action(obj.action); });
		});

 	};

	updateView(){
		 currentview.refresh();
	}

	getAIChoice(){
		return this.ai.choose();
	}

	resetScores(){
		scorePlayer1=0;
		scorePlayer2=0; 
	}

	 updateScore(actionName){
	 	this.AIChoice = currentController.getAIChoice();
		this.player1Output = actionName;
		this.player2Output = this.AIChoice.action.toString();
	 
		var playerMove;

		this.moveList.forEach(function(x){ 
			if(x.action==actionName)
					playerMove = x;

		})
  
		if(playerMove.beats.find(x => x==this.player2Output) ){
		scorePlayer1++; this.player1Outcome="WIN"; snd = new Audio("sounds/win.wav"); snd.play();
		}
		else if(this.AIChoice.beats.find(x => x == this.player1Output) ){
		scorePlayer2++;   this.player1Outcome="LOSS"; snd = new Audio("sounds/fail.wav"); snd.play();
		}
		else{
		snd = new Audio("sounds/tie.wav"); snd.play();  this.player1Outcome="TIE";
		}
 
	}

	action(choice){
		process(choice); 
	}

	parse(choice){ 
		return choice; 
	}

}
class AI{


constructor(){
this.type = "simple";
}

choose(){
var reply = currentController.moveList[Math.floor(Math.random()*currentController.moveList.length)];
 
	 if(this.type=="simple")
		return reply;
}
 


}
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
 
 
