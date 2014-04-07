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
        current_delay = 0,
        obstacles = [],
        sound1 = new Audio(config.bip_1),
        sound2 = new Audio(config.bip_2),
        sound3 = new Audio(config.bip_3),
        sound4 = new Audio(config.bip_4),
        damage = new Audio(config.damage),
        explosion = new Audio(config.explosion),
    //nombre de chance de collision avant echec de la partie
        pv = config.max_pv,
        score = 0;

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
        if (listObstacles.length === 0) {
            current_delay = config.frame_delay_between_wrong_input;
            score -= config.pv_lost;
            Sound().mute();
        }
        removeListObstacles(listObstacles);
    }

    //@romain ceci est une methode en private
    function calculate_frame() {
        if (current_delay === 0) {
            switch (user_input) {
                case 0:
                    //Pas d'input, ne rien faire
                    break;
                case 1:
                    $("#north").css("color", "black");
                    removeObstacles(1);
                    user_input = 0;
                    break;
                case 2:
                    $("#east").css("color", "black");
                    removeObstacles(2);
                    user_input = 0;
                    break;
                case 3:
                    $("#south").css("color", "black");
                    removeObstacles(3);
                    user_input = 0;
                    break;
                case 4:
                    $("#west").css("color", "black");
                    removeObstacles(4);
                    user_input = 0;
                    break;
                default :
                    //Impossible
                    console.log("bug?" + user_input);
                    break;
            }
        } else {
            current_delay--;
            if(current_delay === 0){
                Sound().unmute();
            }
        }

        //score++;
        $("#score").html(score);

        if ($.isEmptyObject(level)) {
            return;
        }

        level.forEach(function (element) {
            if (element.distance === 1) {
                console.log("dispo: " + element.direction);
                obstacles.push(element);
                switch (element.direction) {
                    case 1:
                        $("#north").css("color", "red");
                        sound1.currentTime = 0;
                        sound1.play();
                        break;
                    case 2:
                        $("#east").css("color", "red");
                        sound2.currentTime = 0;
                        sound2.play();
                        break;
                    case 3:
                        $("#south").css("color", "red");
                        sound3.currentTime = 0;
                        sound3.play();
                        break;
                    case 4:
                        $("#west").css("color", "red");
                        sound4.currentTime = 0;
                        sound4.play();
                        break;
                    default :
                        //Impossible
                        break;
                }
            }

            if (element.distance === 0 && inArray(element)) {

                pv--;
                score -= config.pv_lost;
                $("#score").html(score);

                $("#pv").html(pv);
                switch (element.direction) {
                    case 1:
                        $("#north").css("color", "black");
                        break;
                    case 2:
                        $("#east").css("color", "black");
                        break;
                    case 3:
                        $("#south").css("color", "black");
                        break;
                    case 4:
                        $("#west").css("color", "black");
                        break;
                    default :
                        console.log("impossible");
                        break;
                }
                removeObstacles(element.direction);
                if (pv === 0) {
                    $("#player").css("color", "red");
                    console.log("PERDU");
                    explosion.currentTime = 0;
                    explosion.play();
                    Main().endGame(0);
                }else{
                    damage.currentTime = 0;
                    damage.play();
                }
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

};
