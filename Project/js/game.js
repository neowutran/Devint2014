//40 frames/s
//var ONE_FRAME_TIME = 1000 / 40 ;

//@romain ceci est une classe avec pour constructeur un parametre "level"
var Game = function (duration) {
    "use strict";

    //Ceci est un singleton
    if (Game.prototype.instance) {
        return Game.prototype.instance;
    }
    Game.prototype.instance = this;

    //@romain Ce sont des attribut de classes en private
    var user_input = 0,
        frame = 0,
        level = JSON.parse(generation_level(duration)),
        current_delay = 0,
        obstacles = [],
        sound1 = new Audio(Main().getConfiguration().bip_1),
        sound2 = new Audio(Main().getConfiguration().bip_2),
        sound3 = new Audio(Main().getConfiguration().bip_3),
        sound4 = new Audio(Main().getConfiguration().bip_4),
    //nombre de chance de collision avant echec de la partie
        pv = Main().getConfiguration().max_pv;

    $("#log").html(JSON.stringify(level));

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
            if( index !== -1){
                obstacles.splice(index, 1);
            }
        });
    }

    function removeObstacles(direction) {
        var listObstacles = getObstacles(direction);
        if (listObstacles.length === 0) {
            current_delay = Main().getConfiguration().frame_delay_between_wrong_input;
        }
        removeListObstacles(listObstacles);
    }

    //@romain ceci est une methode en private
    function calculate_frame() {
      //  if (current_delay === 0) {
            var obstacles = [];
            switch (user_input) {
                case 0:
                    //Pas d'input, ne rien faire
                    break;
                case 1:
                    $("#north").css("color","black");
                    removeObstacles(1);
                    user_input = 0;	//Pourquoi ?
                    break;
                case 2:
                    $("#east").css("color","black");
                    removeObstacles(2);
                    user_input = 0;
                    break;
                case 3:
                    $("#south").css("color","black");
                    removeObstacles(3);
                    user_input = 0;
                    break;
                case 4:
                    $("#west").css("color","black");
                    removeObstacles(4);
                    user_input = 0;
                    break;
                default :
                    //Impossible
					console.log("bug?" + user_input);
                    break;
            }
       // } else {
        //    current_delay--;
        //}

        if(!(level.hasOwnProperty(frame.toString()))){
            return;
        }

        level[frame].forEach(function (element) {
            if (element.distance === Main().getConfiguration().frame_before_impact) {
                console.log("dispo: "+element.direction);
                obstacles.push(element);
                switch (element.direction) {
                    case 1:
                        $("#north").css("color","red");
                        sound1 = new Audio(Main().getConfiguration().bip_1);
                        sound1.play();
                        break;
                    case 2:
                        $("#east").css("color","red");
                        sound2 = new Audio(Main().getConfiguration().bip_2);
                        sound2.play();
                        break;
                    case 3:
                        $("#south").css("color","red");
                        sound3 = new Audio(Main().getConfiguration().bip_3);
                        sound3.play();
                        break;
                    case 4:
                        $("#west").css("color","red");
                        sound4 = new Audio(Main().getConfiguration().bip_4);
                        sound4.play();
                        break;
                    default :
                        //Impossible
                        break;
                }
            }
            if (element.distance === 0) {
                console.log("impact: frame="+frame);
                pv--;
                $("#pv").html(pv);
                switch(element.direction){
                    case 1:
                        $("#north").css("color","black");
                        break;
                    case 2:
                        $("#east").css("color","black");
                        break;
                    case 3:
                        $("#south").css("color","black");
                        break;
                    case 4:
                        $("#west").css("color","black");
                        break;
                    default :
                        console.log("impossible");
                        break;
                }
                var index = obstacles.indexOf(element);
                if( index !== -1){
                    obstacles.splice(index, 1);
                }
                if (pv === 0) {
                    $("#player").css("color","red");
                    console.log("PERDU");
                    Main().endGame();
                }
            }
        });
    }

    function show_frame() {
        //TODO affichage du jeu pour debuggage
    }

    //@romain, ceci est une methode en publique
    this.run_game = function () {
        //console.log("debut frame: "+frame);
        calculate_frame();
        show_frame();
        frame++;
       // console.log("fin frame: "+frame);
    };

    this.set_user_input = function (new_user_input) {
        user_input = new_user_input;
    };

};

//ces '("file://ma_super_musique.ogg")' a la ligne precedente signifie qu'on instancie la classe

//@romain, voir ici pour plus d'info: http://stackoverflow.com/questions/1114024/constructors-in-javascript-objects
