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

    //@romain, ceci est un attribut de classe en public
    //this.bite = "bite";

    //@romain Ce sont des attribut de classes en private
    var user_input = -1,
        frame = 0,
        frame_delay_between_input = 10,
        level = generation_level(duration),
    //
        current_delay = 0,

    //nombre de chance de collision avant echec de la partie
        pv = 3;


    //@romain ceci est une methode en private
    function calculate_frame() {
        if (current_delay === 0) {
            switch (user_input) {
                case 0:
                    //Pas d'input, ne rien faire
                    break;
                case 1:
                    //TODO action: direction 1
                    user_input = -1;
                    break;
                case 2:
                    //TODO action: direction 2
                    user_input = -1;
                    break;
                case 3:
                    //TODO action: direction 3
                    user_input = -1;
                    break;
                case 4:
                    //TODO action: direction 4
                    user_input = -1;
                    break;
                default :
                    //Impossible
                    break;
            }
        } else {
            current_delay--;
        }

        //TODO lire la description du lvl pour la frame courante
        // ...

    }

    function show_frame() {
        //TODO affichage du jeu pour debuggage
    }

    //@romain, ceci est une methode en publique
    this.run_game = function () {
        console.log("plop ");
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