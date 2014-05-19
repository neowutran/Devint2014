
    function addScore(score, music){

        score = parseInt(score);

        if (localStorage){
            if (localStorage.scores2)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i][0] = parseInt(val[i][0]);
                    if (score>=val[i][0]){
                        alert("Nouveau top score !!");
                        for (var j=config.nbscores-1; j>i; j--){
                            val[j][0] = val[j-1][0];
							val[j][1] = val[j-1][1];
                        }
                        val[i][0] = score;
						val[i][1] = music;
                        break;
                    }
                }
                data = JSON.stringify(val);
                localStorage.setItem("scores2", data);
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }

    function setVariable()
    {
        var data= [[0, ""], [0, ""], [0, ""], [0, ""], [0, ""],];
        var val = JSON.stringify(data);
        localStorage.setItem("scores2", val);
    }

    function testScore(){
        addScore(document.getElementById("sc").value);
        updateScores();
    }


    function getScore(nb){
        if (localStorage){
            if (localStorage.scores2)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);
				
				
                return val[nb][0];
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }

	function getMusique(nb){
        if (localStorage){
            if (localStorage.scores2)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                return val[nb][1];
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }
	
	

    function updateScores(){



        var lignes = document.getElementById("scores").rows;

        if (lignes.length>0){

            for (var i=0; i<=config.nbscores-1; i++){
                lignes[i+1].cells[1].innerHTML = getScore(i);
            }
        } else {

            var tableau = document.getElementById("scores");

            /* ajouter titre colonnes */
            var ligne = tableau.insertRow(-1);
            var colonne1 = ligne.insertCell(0);
            colonne1.innerHTML = "Rang";
            var colonne2 = ligne.insertCell(1);
            colonne2.innerHTML = "Score";
			var colonne3 = ligne.insertCell(2);
            colonne3.innerHTML = "Musique";

            /* placer scores */
            for (var i=0; i<=config.nbscores-1; i++){
                var ligne = tableau.insertRow(-1);
                var colonne1 = ligne.insertCell(0);
                colonne1.innerHTML = i+1;
                var colonne2 = ligne.insertCell(1);
                colonne2.innerHTML = getScore(i);
				var colonne3 = ligne.insertCell(2);
                colonne3.innerHTML = getMusique(i);
            }
        }

    }

    function reinitialiser(){
        if (localStorage){
            if (localStorage.scores)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i][0] = 0;
					val[i][1] = "";
                }

                data = JSON.stringify(val);
                localStorage.setItem("scores2", data);
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }