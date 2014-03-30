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
        maxDistance = 40,
        obstacles = [],
        availableDirection = [],
        //Laisser un temps de repos entre 2 obstacle de 40 frame min
        cooldown = 40,
        currentCooldown = 0;

    availableDirection[1] = true;
    availableDirection[2] = true;
    availableDirection[3] = true;
    availableDirection[4] = true;

     this.generateObstacle = function (volume) {

        //TODO faire un truc mieux que ca
        console.log("volume:"+volume);
        var random = Math.random() * volume;
        return random > 30;

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

    this.generate = function (volume) {

        JSONlevel = "";

        var directionIterator,
            generateObstacle,
            distance,
            direction = [];

        direction[1] = false;
        direction[2] = false;
        direction[3] = false;
        direction[4] = false;

        obstacles.forEach(function (obstacle) {
            obstacle.distance--;
            if (obstacle.distance === 0) {
                if (JSONlevel !== "") {
                    JSONlevel += ",";
                }
                JSONlevel += JSON.stringify(obstacle);
            }
            direction[obstacle.direction] = true;
        });
        removeObstacles();

        for (directionIterator = 1; directionIterator < 5; directionIterator++) {

            if (availableDirection[directionIterator] === true && volume !== 0 && currentCooldown <= 0) {

                generateObstacle = this.generateObstacle(volume);

                //TODO faire mieux que ca
                distance = maxDistance;

                if (generateObstacle === true) {
                    obstacles.push(
                        {
                            "distance": distance,
                            "direction": directionIterator,				//1 -> down  2-> up.
                            "id": id					//time when the obstacle pop.
                        }
                    );

                    if (JSONlevel !== "") {
                        JSONlevel += ",";
                    }

                    JSONlevel += JSON.stringify({
                        "distance": 1,
                        "direction": directionIterator,				//1 -> down  2-> up.
                        "id": id					//time when the obstacle pop.
                    });

                    id++;
                    availableDirection[directionIterator] = false;

                    currentCooldown = cooldown;
                    //Ne pas generer plus de 1 obstacle par frame
                    break;
                }
            }
        }

        for(directionIterator = 1; directionIterator < 5; directionIterator++){
            if(direction[directionIterator] === true){
                availableDirection[directionIterator] = true;
            }
        }

        currentCooldown--;

        JSONlevel = "[" + JSONlevel + "]";
        console.log(JSONlevel);
        return JSONlevel;
    };

};
