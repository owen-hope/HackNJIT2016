function distributeWhites()
{
	console.log("Distribute Whites has been called");
	
	//i = Math.floor(Math.random() * 52) + 1;
	var whiteCardDB = firebase.database().ref('Game001/white_cards/');
	//console.log(i);
	
	
	
	var playerHand = new Array(10); //length of player hand
	
	
	whiteCardDB.on('value',function(snap)
	{
    var snapVal = snap.val();
	
	for (var i = 0;i < playerHand.length;i++)
	{
		var randomNum = Math.floor(Math.random() * 52) + 1;
		
		console.log(randomNum);
		var card1 = firebase.database().ref('Game001/users/0/cards'); //reference to db for player cards
		console.log(randomNum);
		var db1 = firebase.database().ref('Game001/white_cards/'[randomNum]);
		db1.child('cardUsed').set(true);
		
		card1.child('card'+i).set(snapVal[randomNum]); //hand out random cards
		
			
			//var dbUp = firebase.database().ref('Game001/users/0/cards' + snapVal(randomNum) + '/cardUsed')
	}
	});
	
	
	
	
}

	