
function play(idPlayer, control) {
	var player = document.querySelector('#' + idPlayer);
	if (player.paused) {
		player.play();
		control.textContent = 'Pause';
	} else {
		player.pause();	
		control.textContent = 'Play';
	}
}

//Reset le son
function resume(idPlayer) {
	var player = document.querySelector('#' + idPlayer);
	
	player.currentTime = 0;
	player.pause();
}

//Recupere la durée du son
function updateDuree(idPlayer) {
	var player = document.querySelector('#' + idPlayer);
	var duration = player.duration;
	document.querySelector('#affichage').innerHTML="duree totale du son : " + duration;
}


//Pour lancer la fonction updateDuree au chargement de la page
function addEvent(obj, event, fct) {
    if (obj.attachEvent) 
        obj.attachEvent("on" + event, fct);
    else
        obj.addEventListener(event, fct, true);
}

function lancer(fct) {
    addEvent(window, "load", fct);
}

addEvent(window ,"load", updateDuree('audioPlayer'));

