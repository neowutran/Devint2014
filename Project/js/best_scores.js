
    function addScore(score){

        score = parseInt(score);

        if (localStorage){
            if (localStorage.scores)
            {
                var data = localStorage.getItem("scores");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i] = parseInt(val[i]);
                    if (score>=val[i]){
                        alert("Nouveau top score !!");
                        for (var j=config.nbscores-1; j>i; j--){
                            val[j] = val[j-1];
                        }
                        val[i] = score;
                        break;
                    }
                }
                data = JSON.stringify(val);
                localStorage.setItem("scores", data);
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
        var data= [0, 0, 0, 0, 0];
        var val = JSON.stringify(data);
        localStorage.setItem("scores", val);
    }

    function testScore(){
        addScore(document.getElementById("sc").value);
        updateScores();
    }


    function getScore(nb){
        if (localStorage){
            if (localStorage.scores)
            {
                var data = localStorage.getItem("scores");
                var val = JSON.parse(data);

                return val[nb];
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

            /* placer scores */
            for (var i=0; i<=config.nbscores-1; i++){
                var ligne = tableau.insertRow(-1);
                var colonne1 = ligne.insertCell(0);
                colonne1.innerHTML = i+1;
                var colonne2 = ligne.insertCell(1);
                colonne2.innerHTML = getScore(i);
            }
        }

    }

    function reinitialiser(){
        if (localStorage){
            if (localStorage.scores)
            {
                var data = localStorage.getItem("scores");
                var val = JSON.parse(data);

                for (var i=0; i<=config.nbscores-1; i++){
                    val[i] = 0;
                }

                data = JSON.stringify(val);
                localStorage.setItem("scores", data);
            }
            else
            {
                setVariable();
            }
        } else {
            document.write("Sauvegarde des scores non supportée");
        }
    }