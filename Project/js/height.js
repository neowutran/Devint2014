function height(bloc){
	var hauteur;
	
	if( typeof( window.innerWidth ) == 'number' )
		hauteur = window.innerHeight;
	else if( document.documentElement && document.documentElement.clientHeight )
		hauteur = document.documentElement.clientHeight;
	
	document.getElementById(bloc).style.width = hauteur*0.72+"px";
}

window.onload = function(){ height("game") };
window.onresize = function(){ height("game") };
