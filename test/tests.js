
QUnit.module("Main Controller", {
    setup: function() {

var currentController = new Controller();
this.currentview = new View(currentController); 

	//currentController.updateScore(currentController.getAIChoice().action.toString());
	//currentController.updateView();

	currentController.updateScore(choice);
	  
    }
});
 
//alert(JSON.stringify(currentController.moveList));

//Game Engine
QUnit.test("Game allows minimum of 3 abilities", function(assert) {
  
    assert.ok(currentController.moveList.length>2,  "Game allows minimum of 3 abilities");
});

QUnit.test("Game Move List is an array of possible game moves", function(assert) {
    assert.ok( Array.isArray(currentController.moveList),  "Game Move List is an array of possible game moves");
});

QUnit.test("Game Move has an action", function(assert) {
    assert.ok(currentController.moveList[0].action,  "Game Move  has an action");
});

QUnit.test("Game Move has an array of game moves it can beat", function(assert) {
    assert.ok( Array.isArray(currentController.moveList[0].beats)  ,  "Game Move has an array of game moves it can beat");
});

QUnit.test("Reset Game Scores function", function(assert) {
	scorePlayer1++;
	currentController.resetScores();
    assert.equal(  scorePlayer1 , 0   ,  "Reset Game Scores works");
});


QUnit.test("Update Game Scores function", function(assert) { 
	currentController.updateScore("rock"); 
    assert.ok(  currentController.player1Outcome , 0   ,  "Update Game Scores works");
});

 
/* Deprecated as UI elements can now be found using just the move name
QUnit.test("Game ability has an action", function(assert) {
    assert.ok(currentController.moveList.elementId,  "Game ability has an action");
});*/


/* Deprecated as images can now be found using just the move name
QUnit.test("Game move number 1 has an image ", function(assert) {
    assert.ok(currentController.moveList[0].image,  "Game move number 1 has an image");
});*/
  
 
QUnit.module("AI", { });

// AI
QUnit.test("AI thinks and returns object", function(assert) { 
    assert.ok( currentController.getAIChoice(), "Computer player should return response");
});
  
QUnit.test("AI returns an action which has an ability", function(assert) {
  
    assert.ok(currentController.getAIChoice().beats ,  "AI returns an action which has an ability");
});

QUnit.test("AI returns an action which has an array of abilities", function(assert) { 
    assert.ok(currentController.getAIChoice().beats.length>0,  "AI returns an action which has an array of abilities");
});

QUnit.test("AI thinks and returns an action", function(assert) {
    assert.ok( currentController.getAIChoice().action, "AI thinks and returns an action");
});

QUnit.test("AI thinks and returns the name of an UI element to update", function(assert) { 
    assert.ok( currentController.getAIChoice().elementId, "AI thinks and returns the name of an UI element to update");
});


QUnit.module("Rock Paper Scissors Spock Lizard", { 

  setup: function() {

//var currentController = new Controller();  
 
	//currentController.updateScore(currentController.getAIChoice().action.toString());
	//currentController.updateView();
 
	  
    }

    });


QUnit.test("Evolve function creates new moves", function(assert) { 
	


currentController.evolve=1;
currentController.addActionLinks();
	 
    assert.ok( currentController.moveList.length>3,   "New moves Added");
});