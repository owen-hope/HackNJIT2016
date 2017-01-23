function createGame()
	  {
		console.log("create game is called");
		reset();
		//console.log("create game in index is called");
		var PHeader = document.getElementById('pNameHeader');
		var PTable = document.getElementById('PlayerNames');
		  
		var playerNameInput = document.getElementById('playerNameInput');
		var userInput1 = document.getElementById('frm1');
		var userInput2 = document.getElementById('frm2');
		var userInput3 = document.getElementById('frm3');
		var userInput4 = document.getElementById('frm4');
		  
		playerNameInput.style.display = "inline";
		userInput1.style.display = "inline";
		userInput2.style.display = "inline";
		userInput3.style.display = "inline";
		userInput4.style.display = "inline";
		
		var names_array = new Array (4);
		var userNameRef = firebase.database().ref("Game001/users/");
		
		userNameRef.on('value', function(snap){
		var set3 = snap.val();
			for(var i = 0;i < set3.length;i++)
			{
				names_array[i] = set3[i].name;
				
			}
			var p1 = document.getElementById("p1");
			var p2 = document.getElementById("p2");
			var p3 = document.getElementById("p3");
			var p4 = document.getElementById("p4");
			p1.innerText = names_array[0];
			p2.innerText = names_array[1];
			p3.innerText = names_array[2];
			p4.innerText = names_array[3];
		});
		//document.getElementById("cGame")
	}