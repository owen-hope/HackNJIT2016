function playGame()
	{
		console.log("play game has been called");
		var PHeader = document.getElementById('pNameHeader');
		var PTable = document.getElementById('PlayerNames');
		
		PHeader.style.display = "inline";
		PTable.style.display = "inline";
		
		var PlayButton = document.getElementById('pGame');
		var UserName1 = document.getElementById('frm1').value;
		var UserName2 = document.getElementById('frm2').value;
		var UserName3 = document.getElementById('frm3').value;
		var UserName4 = document.getElementById('frm4').value;
		
		var names_array = new Array (4);
		var userNameRef = firebase.database().ref("Game001/users/");

		userNameRef.on('value', function(snap){
		var set3_1 = snap.val();
			for(var i = 0;i < set3_1.length;i++)
			{
				names_array[i] = set3_1[i].name;
			}
			var x;
			//***************************
			if(names_array[0] == ""){
				var adaNameRef = firebase.database().ref('Game001/users/0');
				adaNameRef.child('name').set(UserName1);
				}
			if(names_array[1] == ""){
				var adaNameRef = firebase.database().ref('Game001/users/1');
				adaNameRef.child('name').set(UserName2);
				}
			if(names_array[2] == ""){
				var adaNameRef = firebase.database().ref('Game001/users/2');
				adaNameRef.child('name').set(UserName3);
				}
			if(names_array[3] == ""){
				var adaNameRef = firebase.database().ref('Game001/users/3');
				adaNameRef.child('name').set(UserName4);
				}
			userNameRef.off();
			//*********************************
		});
		
		clearPage();
		distributeWhites();
	}