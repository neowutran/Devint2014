/**
 * Created by gr100287 on 12/05/14.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var Scores = function () {
    "use strict";

    /* singleton */
    if (Scores.prototype.instance) {
        return Scores.prototype.instance;
    }
    Scores.prototype.instance = this;


	function isFromGame() {
		var url = window.location.href;
		var splitted = url.split("?");
		if(splitted.length === 1) {
		   return {};
		}
		var paramList = decodeURIComponent(splitted[1]).split("&");
		var params = {};
		for(var i = 0; i < paramList.length; i++) {
			var paramTuple = paramList[i].split("=");
			if (paramTuple[0] == "fromgame") {return true;}
		}
		return false;
	}

    $("body").keypress(function (event) {
	
        switch (event.keyCode) {
            //escape
            case 27:
                event.preventDefault();
                cancel();
                break;
			case 0 :
				switch (event.charCode) {
					// D : gauche
					case 100:
						event.preventDefault();
						cancel();
						break;
				}
				break;
        }

    });


    function cancel() {
		if (isFromGame()){
			console.log("cancel from game");
			$(location).attr('href', "./jouer.html");
		}
        else {
			console.log("cancel from menu");
			$(location).attr('href', "./index.html");
		}

    }

};

var scores = new Scores();

