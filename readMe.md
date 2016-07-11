Rock, Paper, Scissors by Chris Ridley 11/07/2016

Install dependencies (grunt):
	npm install

To run:
	Type "Grunt" to compile

	Then navigate to the build directory and load "build/index.html" in a browser. 

Tests:
Just load "test/runner.html" in a browser.

Instructions:

	Play by selecting options for your move. 

	To get the computer to play itself, click on the blue link called "AI" next to "Player 1".  This changes player 1 to an AI.  Both AIs will play together now.

	Bored?  Click on the "BONUS" link.  This will evolve (I mean 'update' but I spent most of the weeked playing PokemonGo) your game into Rock,Paper,Scissors,Spock,Lizard.

Extending the game:
	New moves can be easily added by adding a new gameEntity to the moveList array.  You then need to simply add which other gameEntities can beat it.

If I had more time / aka Future Improvements:

	Creation of New Moves:
	A possible change is to do a parity comparison to decide a winner, instead of relying on adding the relation between gameEntities yourself.

	The big one:
	I really, really wanted to make this a networked multiplayer game using sockets.io.  However as your specification asked for the minimum viable product, and I did not believe I could get a bug free Networked game for 20 players or so running without bugs within the 2 day time limit, I decided to create a good single player version. 
	If I had been given 3-5 full days I would have gone for a networked multiplayer game.  (Similar to my other networked games such as Warnet.io ). 
	I would have simply made a server which would feed back responses to the connected socketId.  The only slightly complicated part would be the creation of a lobby system for pairing users.  Basically the main lobby code would run on an interval, connecting socketIds in an array, removing closed connections and finally adding a relationship between socketIds which arent in a game state.
	Infact I will probably end up doing this anyway in the next few weeks, so check craftfortress.com if you are interested!

	Blanket.js
	My main regret, I haven't quite managed to try out blankey.js as my new code coverage tool, I usually use Istanbul.

Thank you for taking the time to look at my code.  Have a great day ^_^
