
    function addScore(score, music, difficulte){

        score = parseInt(score);
		var tab = music.split('/');
		music = tab[tab.length-1];
		music = music.split('.')[0];

        if (localStorage){
            if(!localStorage.scores2){
                setVariable();
            }

                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i].score = parseInt(val[i].score);
                    if (score>=val[i].score){
                        for (var j=config.nbscores-1; j>i; j--){
                            val[j].score = val[j-1].score;
							val[j].music = val[j-1].music;
							val[j].difficulte = val[j-1].difficulte;
                        }
                        val[i].score = score;
						val[i].music = music;
						
						switch (difficulte){
							case 1 : 
								val[i].difficulte = "Facile";
								break;
							case 2 :
								val[i].difficulte = "Normal";
								break;
							case 3 :
								val[i].difficulte = "Difficile";
								break;
							default :
								val[i].difficulte = "Inconnu";
								break;
						}
                        break;
                    }
                }
                data = JSON.stringify(val);
                localStorage.setItem("scores2", data);

        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }

    function setVariable()
    {
        var val = [];

        for (var i=0; i<=config.nbscores-1; i++){
            var item = {
				"score": 0,
				"music": "",
				"difficulte":"" 
			};
			val.push(item);
        }

        var data = JSON.stringify(val);
        localStorage.setItem("scores2", data);
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
				
				
                return val[nb].score;
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

                return val[nb].music;
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }
	
	function getDifficulte(nb){
        if (localStorage){
            if (localStorage.scores2)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                return val[nb].difficulte;
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
				lignes[i+1].cells[2].innerHTML = getMusique(i);
				lignes[i+1].cells[3].innerHTML = getDifficulte(i);
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
			var colonne4 = ligne.insertCell(3);
            colonne4.innerHTML = "Difficulté";

            /* placer scores */
            for (var i=0; i<=config.nbscores-1; i++){
                var ligne = tableau.insertRow(-1);
                var colonne1 = ligne.insertCell(0);
                colonne1.innerHTML = i+1;
                var colonne2 = ligne.insertCell(1);
                colonne2.innerHTML = getScore(i);
				var colonne3 = ligne.insertCell(2);
                colonne3.innerHTML = getMusique(i);
				var colonne4 = ligne.insertCell(3);
                colonne4.innerHTML = getDifficulte(i);
            }
        }

    }

    function reinitialiser(){
        if (localStorage){
            if (localStorage.scores2)
            {
                var data = localStorage.getItem("scores2");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i].score = 0;
					val[i].music = "";
					val[i].difficulte = "";
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