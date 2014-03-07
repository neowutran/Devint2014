//40 frames/s
//var ONE_FRAME_TIME = 1000 / 40 ;

//@romain ceci est une classe avec pour constructeur un parametre "level"
var Game = function (duration = null) {
    "use strict";

    //Ceci est un singleton
    if (Game.prototype.instance) {
        return Game.prototype.instance;
    }
    Game.prototype.instance = this;

    //@romain Ce sont des attribut de classes en private
    var user_input = -1,
        frame = 0,
        frame_delay_between_input = 10,
        level = JSON.parse(generation_level(duration)),
        current_delay = 0,
        obstacles = [],
        sound1 = new Audio("sounds/1.wav"),
        sound2 = new Audio("sounds/2.wav"),
        sound3 = new Audio("sounds/3.wav"),
        sound4 = new Audio("sounds/4.wav"),

    //nombre de chance de collision avant echec de la partie
        pv = 3;

    function getObstacles(direction) {
        var newObstacles = [];
        obstacles.forEach(function (element, index, array) {
            if (element.direction === direction) {
                newObstacles.push(element);
            }
        });
        return newObstacles;
    }

    function removeListObstacles(listObstacles) {
        listObstacles.forEach(function (element, index, array) {

            index = obstacles.indexOf(element);
            if( index !== -1){
                obstacles.splice(index, 1);
            }
        });
    }

    function removeObstacles(direction) {

        var listObstacles = getObstacles(direction);
        if (listObstacles.length === 0) {
         //   current_delay = frame_delay_between_input;
        }
        removeListObstacles(listObstacles);

    }

    //@romain ceci est une methode en private
    function calculate_frame() {
        if (current_delay === 0) {
            var obstacles = [];
            switch (user_input) {
                case 0:
                    //Pas d'input, ne rien faire
                    break;
                case 1:
                    removeObstacles(1);
                    user_input = -1;
                    break;
                case 2:
                    removeObstacles(2);
                    user_input = -1;
                    break;
                case 3:
                    removeObstacles(3);
                    user_input = -1;
                    break;
                case 4:
                    removeObstacles(4);
                    user_input = -1;
                    break;
                default :
                    //Impossible
                    break;
            }
        } else {
            current_delay--;
        }

        console.log("test");
        console.log(level);
        console.log(level[frame]);

        level[frame].forEach(function (element, index, array) {
            if (element.distance === 1) {
                obstacles.push(element);
                switch (element.direction) {
                    case 1:
                        sound1.play();
                        break;
                    case 2:
                        sound2.play();
                        break;
                    case 3:
                        sound3.play();
                        break;
                    case 4:
                        sound4.play();
                        break;
                    default :
                        //Impossible
                        break;
                }
            }
            if (element.distance === 0) {
                pv--;
                index = obstacles.indexOf(element);
                if( index !== -1){
                    obstacles.splice(index, 1);
                }
                if (pv === 0) {
                    console.log("PERDU");
                }
            }
        });
    }

    function show_frame() {
        //TODO affichage du jeu pour debuggage
    }

    //@romain, ceci est une methode en publique
    this.run_game = function () {
        console.log("frame: " + frame);
        calculate_frame();
        show_frame();
        frame++;
    };

    this.set_user_input = function (new_user_input) {
        user_input = new_user_input;
        console.log("game: " + user_input);
        console.log("level: " + level);
    };


};

//ces '("file://ma_super_musique.ogg")' a la ligne precedente signifie qu'on instancie la classe

//@romain, voir ici pour plus d'info: http://stackoverflow.com/questions/1114024/constructors-in-javascript-objects
