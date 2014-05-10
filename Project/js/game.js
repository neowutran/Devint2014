//@romain ceci est une classe avec pour constructeur un parametre "level"
var Game = function (difficulte) {
    "use strict";

    //Ceci est un singleton
    if (Game.prototype.instance) {
        return Game.prototype.instance;
    }
    Game.prototype.instance = this;

    //@romain Ce sont des attribut de classes en private
    var user_input = 0,
        frame = 0,
        level,
        obstacles = [],
    //nombre de chance de collision avant echec de la partie
        score = 0;

    var tab = new Array();
    var tabActif = new Array(); //Tableau qui indique si un taupiqueur est sortit ou non.

    new LevelGeneration().setDifficulte(difficulte);

    function getObstacles(direction) {
        var newObstacles = [];
        obstacles.forEach(function (element) {
            if (element.direction === direction) {
                newObstacles.push(element);
            }
        });
        return newObstacles;
    }

    function removeListObstacles(listObstacles) {
        listObstacles.forEach(function (element) {
            var index = obstacles.indexOf(element);
            if (index !== -1) {
                obstacles.splice(index, 1);
            }
        });
    }

    function inArray(element) {
        var isInArray = false;
        obstacles.forEach(function (elem) {
            if (element.id === elem.id) {
                isInArray = true;
            }
        });
        return isInArray;
    }

    function removeObstacles(direction) {
        var listObstacles = getObstacles(direction);
        removeListObstacles(listObstacles);
    }

    //@romain ceci est une methode en private
    function calculate_frame() {
            switch (user_input) {
                case 0:
                    //Pas d'input, ne rien faire
                    break;
                case 1:

                    removeObstacles(1);
                    break;
                case 2:

                    removeObstacles(2);
                    break;
                case 3:

                    removeObstacles(3);
                    break;
                case 4:

                    removeObstacles(4);
                    break;
                case 5:

                    removeObstacles(5);
                    break;
                case 6:

                    removeObstacles(6);
                    break;
                case 7:

                    removeObstacles(7);
                    break;
                case 8:

                    removeObstacles(8);
                    break;
                case 9:

                    removeObstacles(9);
                    break;
                default :
                    //Impossible
                    console.log("bug?" + user_input);
                    break;
            }

        user_input = 0;


        if ($.isEmptyObject(level)) {
            return;
        }

        level.forEach(function (element) {
            if (element.distance === 1) {
                console.log("dispo: " + element.direction);
                obstacles.push(element);
                switch (element.direction) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;

                    default :
                        //Impossible
                        break;
                }
            }

            if (element.distance === 0 && inArray(element)) {

                switch (element.direction) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                    default :
                        console.log("impossible");
                        break;
                }

                removeObstacles(element.direction);
            }
        });
    }

    //@romain, ceci est une methode en publique
    this.run_game = function (volume) {
        level = JSON.parse(LevelGeneration().generate(volume, obstacles));
        calculate_frame();
        frame++;
    };

    this.set_user_input = function (new_user_input) {
        user_input = new_user_input;
    };

    this.getScore = function () {
        return score;
    };

    this.setScore = function(new_score){
        score = new_score;
    };

    this.play = function(){
        //Initialisation.

        var video = document.getElementById("test");
        var i = 1;
        for(i=1;i<10;i++){
            var video = document.getElementById("taupi"+i);
            tab[i]=video;
        }

        var j=0;

        for(j=1;j<tab.length;j++){
            tab[j].currentTime=0;//play();
            tab[j].pause();
        }



        var rand = Math.floor((Math.random() * 9) + 1);

        tab[rand].play();
        tabActif[rand]=true;



    };

    this.bam = function(id){
        var rand = Math.floor((Math.random() * 9) + 1);
        if(tabActif[id]===true){
            var video = document.getElementById("taupi"+id);
            video.currentTime=0;
            video.pause();
            tabActif[id]=false;
            var newtaupi = document.getElementById("taupi"+rand);
            newtaupi.play();
            tabActif[rand]=true;
            var score = document.getElementById("score");
            var tmp = parseInt(score.innerHTML);
            tmp++;
            //console.log(tmp+1);
            score.innerHTML=tmp;//.toString();
        }

    };

};
