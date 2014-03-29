var LevelGeneration = function () {
    'use strict';

        //Singleton
        if(LevelGeneration.prototype.instance){
            return LevelGeneration.prototype.instance;
        }
        LevelGeneration.prototype.instance=this;

    /*Attributs de classes*/
    var stringtmp,
        distance = 60,
        pattern = "",
        JSONlevel = "",
        id = 0,
        cmp = -1,//numero de la frame.
        tmp=distance,
        rand = Math.floor((Math.random() * 4) + 1),
        portee=1,
        item;

        function computeDelay(min, max) {
            return Math.floor(min + (Math.random() * (max - min)));
        }

        this.generate = function(valeur) {

            JSONlevel = "";

            //TODO traiter valeur.
            if (distance < 0) {

                distance = computeDelay(60, 180);
                tmp = distance;
                id++;
                rand = Math.floor((Math.random() * 4) + 1); // Random between 1 and 4 .
                console.log(distance);
            }

            if(distance===tmp){
                portee=1;
            }
            else if(distance===0){
                portee=0;
            }

            item = {
                "distance": portee,
                "direction": rand,				//1 -> down  2-> up.
                "id": id					//time when the obstacle pop.
            };

            if(pattern !== "" ){
                pattern += ",";
            }
            pattern += JSON.stringify(item);

            if(distance===tmp || distance===0){

                stringtmp = "";
                if(JSONlevel !== ""){
                    stringtmp = ",";
                }
                stringtmp += pattern;
                JSONlevel = JSONlevel + stringtmp;
            }

            distance--;

            cmp++;

            JSONlevel = "[" + JSONlevel + "]";
            console.log(JSONlevel);
            return JSONlevel;
        };

    };
