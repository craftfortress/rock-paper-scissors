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