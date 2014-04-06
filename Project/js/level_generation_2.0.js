var LevelGeneration = function () {
    'use strict';

    //Singleton
    if (LevelGeneration.prototype.instance) {
        return LevelGeneration.prototype.instance;
    }
    LevelGeneration.prototype.instance = this;

    /*Attributs de classes*/
    var JSONlevel = "",
        id = 0,
        cmp = 0,
        obstacles = [],
        availableDirection = [],
    //Laisser un temps de repos entre 2 obstacle de 40 frame min
        cooldown = config.cooldown,
        currentCooldown = 0,
        nbTouches,
        difficulte = 1; //difficulte : 1=facile, 2 = normal et 3 = difficile.

    availableDirection[1] = true;
    availableDirection[2] = true;
    availableDirection[3] = true;
    availableDirection[4] = true;

    this.generateObstacle = function (volume) {

        //TODO faire un truc mieux que ca
        console.log("volume:" + volume);
        var random = volume - computeDelay(25,30) ;
        console.log(random);
        if(difficulte===difficulteEnum.FACILE){
            return false;
        }
        return random > (100 - (difficulte * 10));

    };

    this.setDifficulte = function (difficult) {
        difficulte = difficult;
        if(difficulte === null){
            throw new ArgyrosException("Null pointer exception", "you cannot set difficulte to null");
        }

    };

    function getObstacles() {
        var newObstacles = [];
        obstacles.forEach(function (element) {
            if (element.distance <= 0) {
                newObstacles.push(element);
            }
        });
        return newObstacles;
    }

    function computeDelay(min, max) {
        return Math.floor(min + (Math.random() * (max - min)));
    }

    function removeListObstacles(listObstacles) {
        listObstacles.forEach(function (element) {
            var index = obstacles.indexOf(element);
            if (index !== -1) {
                obstacles.splice(index, 1);
            }
        });
    }

    function removeObstacles() {
        var listObstacles = getObstacles();
        removeListObstacles(listObstacles);
    }

    function removeObstaclesByDirection(direction){
        var listObstacles = getObstaclesByDirection(direction);
        removeListObstacles(listObstacles);
    }

    function getObstaclesByDirection(direction){
        var newObstacles = [];
        obstacles.forEach(function (element) {
            if (element.direction === direction) {
                newObstacles.push(element);
            }
        });
        return newObstacles;
    }

    this.generate = function (volume,game_obstacles) {

        JSONlevel = "";

        var directionIterator,
            generateObstacle,
            distance,
            game_obstacle,
            tobe_removed = [];

        availableDirection[1] = true;
        availableDirection[2] = true;
        availableDirection[3] = true;
        availableDirection[4] = true;

        tobe_removed[1] = false;
        tobe_removed[2] = false;
        tobe_removed[3] = false;
        tobe_removed[4] = false;

        obstacles.forEach(function (obstacle) {
            //Rapprochement de l'obstacle du joueur
            obstacle.distance--;

            //Notifier l'impact de l'obstacle
            if (obstacle.distance === 0) {
                if (JSONlevel !== "") {
                    JSONlevel += ",";
                }
                JSONlevel += JSON.stringify(obstacle);

            }else{
                //On compare notre liste d'obstacle a celle du joueur, si il y a des element de differences (obstacles evité par le joueur, alors on lui
                // attribue des points et on met a jour notre liste d'obstacle)
                availableDirection[obstacle.direction] = false;
                game_obstacle = $.grep(game_obstacles, function(element){
                    return element.id === obstacle.id;
                });
                if(game_obstacle.length === 0){
                    availableDirection[obstacle.direction] = true;
                    tobe_removed[obstacle.direction] = true;
                    Game().setScore(Game().getScore() + obstacle.distance * 50);
                }
            }
        });
        for(directionIterator = 1; directionIterator < 5 ; directionIterator++){
            if(tobe_removed[directionIterator] === true){
                removeObstaclesByDirection(directionIterator);
            }
        }

        //On supprime de notre liste d'obstacles les obstacles ayant une distance <= 0
        removeObstacles();

        //On defini le nombre de touche + 1 qui vont etre utilisé
        if (difficulte === difficulteEnum.FACILE) {
            //2 touche (3-1)
            nbTouches = 3;
        }
        else if (difficulte === difficulteEnum.NORMAL) {
            //3 touches (4-1)
            nbTouches = 4;
        }
        else if (difficulte === difficulteEnum.DIFFICILE) {
            //4 touches (5-1)
            nbTouches = 5;
        }

        for (directionIterator = 1; directionIterator < nbTouches; directionIterator++) {

            //si il est autorisé de generer un obstacle
            if (availableDirection[directionIterator] === true && volume !== 0 && currentCooldown <= 0) {

                //on lance une change de generation d'un obstacle
                generateObstacle = this.generateObstacle(volume);

                //on defini la distance de l'obstacle par rapport au joueur
                //TODO faire mieux que ca
                if (difficulte === difficulteEnum.FACILE) {
                    distance = computeDelay(70, 100);
                } else if (difficulte === difficulteEnum.NORMAL) {
                    distance = computeDelay(50, 70);
                } else if (difficulte === difficulteEnum.DIFFICILE) {
                    distance = computeDelay(30, 50);
                }
                cmp++;
                //on notifie le jeu de l'obstacle si il y en a un
                if (generateObstacle === true || (cmp===160 && difficulteEnum.FACILE)) {
                    var tmp = directionIterator;
                    directionIterator=computeDelay(1,3);
                    console.log(directionIterator);
                    obstacles.push(
                        {
                            "distance" : distance,
                            "direction": directionIterator,				//1 -> down  2-> up.
                            "id"       : id					//time when the obstacle pop.
                        }

                    );

                    if (JSONlevel !== "") {
                        JSONlevel += ",";
                    }

                    JSONlevel += JSON.stringify({
                        "distance" : 1,
                        "direction": directionIterator,				//1 -> down  2-> up.
                        "id"       : id					//time when the obstacle pop.
                    });
                    directionIterator=tmp;
                    id++;
                    availableDirection[directionIterator] = false;

                    currentCooldown = cooldown;
                    //Ne pas generer plus de 1 obstacle par frame
                    cmp=0;
                    break;
                }
            }

        }

        currentCooldown--;

        JSONlevel = "[" + JSONlevel + "]";
        //console.log(JSONlevel);
        return JSONlevel;
    };

};
