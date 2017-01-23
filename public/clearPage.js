function clearPage()
{
	var welcomeprompt = document.getElementById('welcomepage');
	welcomeprompt.style.display='none';
	
	var creategame = document.getElementById('cGame');
	creategame.style.display='none';
	
	var playgame = document.getElementById('pGame');
	playgame.style.display='none';
	
	var playernameheader = document.getElementById('pNameHeader');
	playernameheader.style.display='none';
	
	var playernames = document.getElementById('PlayerNames');
	playernames.style.display='none';
	
	var playernameinput = document.getElementById('playerNameInput');
	playernameinput.style.display='none';
	
	var reset = document.getElementById('resetGame');
	reset.style.display='none';
	
	var namesofplayers = document.getElementById('namesOfPlayers');
	namesofplayers.style.display='none';
}