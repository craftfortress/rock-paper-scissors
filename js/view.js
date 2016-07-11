
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