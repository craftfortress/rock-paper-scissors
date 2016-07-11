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