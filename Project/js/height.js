function height(bloc){
	var hauteur;
	
	if( typeof( window.innerWidth ) == 'number' )
		hauteur = window.innerHeight;
	else if( document.documentElement && document.documentElement.clientHeight )
		hauteur = document.documentElement.clientHeight;
	
	document.getElementById("game").style.width = hauteur+"px";
}

window.onload = function(){ height("display") };
window.onresize = function(){ height("display") };
