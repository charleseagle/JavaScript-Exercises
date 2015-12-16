function batting(player, distance){
	if ( 0 < distance && distance <= 350){
		document.write(player + " hit the ball!");
	}
	else if (distance <=0){
		document.write(player + " STRUCK OUT!");
	}		
	
	else {
		document.write(player + " hit a home run!");
	}
}


batting("John", 0);