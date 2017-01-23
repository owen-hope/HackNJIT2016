function reset()	{
		console.log("reset is called");
		var resetGame = firebase.database().ref("Game001/users");
		resetGame.on('value', function(snap){
		var set3_1 = snap.val();
		
		var UserName1 = document.getElementById('frm1').value;
		var UserName2 = document.getElementById('frm2').value;
		var UserName3 = document.getElementById('frm3').value;
		var UserName4 = document.getElementById('frm4').value;
			var x;
			//***************************
			
			var adaNameRef = firebase.database().ref('Game001/users/0');
			adaNameRef.child('name').set("");
			UserName1.innerText=" ";

			var adaNameRef = firebase.database().ref('Game001/users/1');
			adaNameRef.child('name').set("");
			UserName2.innerText=" ";

			var adaNameRef = firebase.database().ref('Game001/users/2');
			adaNameRef.child('name').set("");
			UserName3.innerText=" ";

			var adaNameRef = firebase.database().ref('Game001/users/3');
			adaNameRef.child('name').set("");
			UserName4.innerText=" ";

			resetGame.off();
			//*********************************
		});
	}// JavaScript Document